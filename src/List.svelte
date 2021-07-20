<script lang="ts">
  import type { Comment } from "./types";
  import { reply } from "./store";
  import { since } from "./time";
  import EventEmitter from "./event";

  export let comments: Comment[] = [];

  let hash = location.hash;

  function hashchange() {
    const h = location.hash;
    hash = /#ovo-(\d+|[a-z,0-9]{7})/.test(h) ? h : "";
  }

  function replyTo(c: Comment) {
    reply.set(c);
  }

  let bm = 0;

  // a bitmap magic
  function toggle(i: number) {
    bm ^= 1 << i;
  }
</script>

{#if comments}
  <!-- sometimes comments is not Array-like and I don't know why. -->
  {#each comments as c, i}
    <article id="ovo-{c.id}" class:active={hash && hash.slice(5) === c.id}>
      <div class="info">
        <span class="ovo-b"><a href={c.user?.website} target="_blank">{c.user?.name}</a></span>
        <span class="ovo-s ovo-ptr" title="引用" on:click={() => EventEmitter.emit("ref", c.id)}>
          #{c.id}</span
        >
        <span class="ovo-s"> {since(c.ctime)}</span>
        <span class="ovo-s ovo-a ovo-ptr" on:click={() => toggle(i + 1)}>
          {c.children?.length || 0} 条回复</span
        >
        <span class="ovo-s ovo-r ovo-ptr" on:click={() => replyTo(c)}>回复</span
        >
      </div>
      <div class="content">{@html c.content}</div>
      <div class="details" class:open={bm & (1 << (i + 1))}>
        <svelte:self comments={c.children} />
      </div>
    </article>
  {/each}
{/if}

<svelte:window on:hashchange={hashchange} />

<style>
  .info {
    padding-top: 1em;
  }

  a {
    color: var(--ovo-ft);
  }

  .content {
    font-size: .9em;
  }

  :global(.details article) {
    border-bottom: 1px solid var(--ovo-bg-hvr);
  }

  .details {
    display: none;
    margin-left: 2em;
  }

  :global(.content a) {
    color: var(--ovo-pm);
    text-decoration: none;
  }

  article.active {
    background: var(--ovo-bg-hvr);
  }

  .open {
    display: block;
  }
</style>
