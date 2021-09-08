<script lang="ts">
  import type { Comment, Locale, Repliable } from "./types";
  import { reply } from "./store";
  import { since } from "./time";
  import EventEmitter from "./event";

  export let comments: Comment[] = [];
  export let locale: Locale;

  let hash = location.hash;

  function hashchange() {
    const h = location.hash;
    hash = /#ovo-(\d+|[a-z,0-9]{7})/.test(h) ? h : "";
  }

  function replyto(c: Repliable<Comment>) {
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
        <span class="ovo-b"><a href={c.issuer_website} target="_blank">{c.issuer}</a></span>
        <span class="ovo-s ovo-ptr" title={locale.comment.reference} on:click={() => EventEmitter.emit("ref", c.id)}>
          #{c.id}</span
        >
        <span class="ovo-s"> {since(c.ctime)}</span>
        {#if c.replies?.length}
        <span class="ovo-s ovo-a ovo-ptr" on:click={() => toggle(i + 1)}>
          {c.replies?.length} {locale.comment.comment}</span
        >
        {/if}
        <span class="ovo-s ovo-r ovo-ptr" on:click={() => replyto(c)}>{locale.comment.reply}</span
        >
      </div>
      <div class="content">{@html c.content}</div>
      <div class="details" class:open={bm & (1 << (i + 1))}>
        <svelte:self comments={c.replies} {locale} />
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
