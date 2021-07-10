<script lang="ts">
  import type { Comment, User } from "./types";
  import { reply, users } from "./store";
  import { since } from "./time";
  import { onMount } from "svelte";
  import dfs from "./dfs";

  export let comments: Comment[] = [];

  let hash = location.hash;

  function hashchange() {
    const h = location.hash;
    hash = /#ovo\d+/.test(h) ? h : "";
  }

  function replyTo(c: Comment) {
    reply.set(c);
  }

  let bm = 0;

  // a bitmap magic
  function toggle(i: number) {
    bm ^= 1 << i;
  }

  onMount(function () {
    const us = new Map<string, User>();
    dfs(comments, (c: Comment) => {
      us.set(c.user?.name, {
        name: c.user.name,
        website: c.user.website,
      });
    });
    users.set(us);
  });
</script>

{#each comments as c, i}
  <article id="ovo{c.id}" class:active={hash && +hash.slice(4) === c.id}>
    <div class="info">
      <span class="ovo-b"><a href={c.user?.website}>{c.user?.name}</a></span>
      <span class="ovo-s"> #{c.id}</span>
      <span class="ovo-s"> {since(c.ctime)}</span>
      <span class="ovo-s ovo-a ovo-ptr" on:click={() => toggle(i + 1)}>
        {c.children?.length || 0} 条回复</span
      >
      <span class="ovo-s ovo-r ovo-ptr" on:click={() => replyTo(c)}>回复</span>
    </div>
    <div class="content">{@html c.content}</div>
    <div class="details" class:open={bm & (1 << (i + 1))}>
      <svelte:self comments={c.children} />
    </div>
  </article>
{/each}

<svelte:window on:hashchange={hashchange} />

<style>
  .info {
    padding-top: 1em;
  }

  a {
    color: var(--ovo-ft);
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
