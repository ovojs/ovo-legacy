<script lang="ts">
  import type { Comment, User } from "./types";
  import { reply, users } from "./store";
  import { since } from "./time";
  import { onMount } from "svelte";
  import dfs from "./dfs";

  export let comments: Comment[] = [];

  let hash = location.hash;

  function hashchange() {
    hash = location.hash;
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
      us.set(c.name, {
        name: c.name,
        website: c.website
      });
    });
    users.set(us);
  });
</script>

{#each comments as c, i}
  <article id="ovo{c.id}" class:active={+hash.slice(4) == c.id}>
    <div class="info">
      <span class="ovo-b"><a href={c.website}>{c.name}</a></span>
      <span class="ovo-s">| #{c.id}</span>
      <span class="ovo-s">| {since(c.ctime)}</span>
      <span class="ovo-s ovo-ptr" on:click={() => toggle(i + 1)}
        >| {c.children.length} 条回复</span
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
    color: #444;
  }

  :global(.details article) {
    border-bottom: 1px solid #eee;
  }

  .details {
    display: none;
    margin-left: 2em;
  }

  :global(.content a) {
    color: #08c;
    text-decoration: none;
  }

  article.active {
    background: #eee;
  }

  .open {
    display: block;
  }
</style>
