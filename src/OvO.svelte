<script lang="ts">
  import Comment from "./Comment.svelte";
  import Editor from "./Editor.svelte";
  import { count } from "./dfs";
  import Loading from "./Loading.svelte";
  import type { Comments, User } from "./types";
  import { onDestroy, onMount } from "svelte";
  import HTTP from "./http";

  export let placeholder = "说点什么吧~";
  export let emoji =
    "https://cdn.jsdelivr.net/gh/DejavuMoe/DejavuMoe/emoji.json";

  export let server =
    "https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo";

  export let timeout = 10000;

  HTTP.init({ server, timeout });

  let p: Promise<Comments>;
  let page = 0;

  let user: User;

  try {
    p = HTTP.getComments({
      domain: location.hostname,
      path: location.pathname,
      page,
    });
  } catch (e) {
    console.log(e);
  }

  onMount(function () {
    const cache = localStorage.user;
    if (cache) {
      user = JSON.parse(cache);
    }
  });

  onDestroy(function () {
    console.log("OvO was destroyed");
  });
</script>

<section class="OvO">
  <Editor
    {placeholder}
    {emoji}
    name={user?.name}
    email={user?.email}
    website={user?.website}
  />
  {#await p}
    <Loading />
  {:then c}
    <h3>评论 {count(c.comments)}</h3>
    <Comment comments={c.comments} />
  {/await}
</section>

<style>
  .OvO {
    width: 100%;
  }

  h3 {
    margin-bottom: 0;
  }
</style>
