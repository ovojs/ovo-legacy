<script lang="ts">
  import Editor from "./Editor.svelte";
  import { count } from "./dfs";
  import type { Comments, Comment, User } from "./types";
  import { onDestroy, onMount } from "svelte";
  import HTTP from "./http";
  import Sentinal from "./Sentinal.svelte";
  import List from "./List.svelte";

  export let placeholder = "说点什么吧~";
  export let emoji =
    "https://cdn.jsdelivr.net/gh/DejavuMoe/DejavuMoe/emoji.json";

  export let server =
    "https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo";

  export let timeout = 10000;

  HTTP.init({ server, timeout });

  let page = -1;
  let done = false;
  let comments: Comment[] = [];
  let next: Comments;
  let user: User;

  onMount(function () {
    const cache = localStorage.user;
    if (cache) {
      user = JSON.parse(cache);
    }
  });

  onDestroy(function () {
    console.log("OvO was destroyed");
  });

  async function visiable(e: CustomEvent<IntersectionObserverEntry>) {
    if (done) return;

    page++;

    try {
      next = await HTTP.getComments({
        domain: location.hostname,
        path: location.pathname,
        page,
      });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }

    done = next.done;

    comments = [...comments, ...next.comments];
  }
</script>

<section class="OvO">
  <Editor
    {placeholder}
    {emoji}
    name={user?.name}
    email={user?.email}
    website={user?.website}
  />

  {#if comments.length}
    <h3>评论 {count(comments)}</h3>
    <List {comments} />
  {/if}

  <Sentinal on:visiable={visiable} {done} />
</section>

<style>
  .OvO {
    width: 100%;
    max-width: 800px;
  }

  h3 {
    margin-bottom: 0;
  }
</style>
