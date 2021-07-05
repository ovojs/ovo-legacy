<script lang="ts">
  import Comment from "./Comment.svelte";
  import Editor from "./Editor.svelte";
  import { count } from "./dfs";
  import Loading from "./Loading.svelte";
  import type { Comments } from "./types";
  import { onDestroy } from "svelte";

  export let placeholder = "说点什么吧~";
  export let emoji =
    "https://cdn.jsdelivr.net/gh/DejavuMoe/DejavuMoe/emoji.json";

  export let server =
    "https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo";

  async function fetchComments(url: string): Promise<Comments> {
    const res = await fetch(url);

    try {
      if (!res.ok) {
        throw new Error("error fetching comments");
      }
      const c: Comments = await res.json();
      return c;
    } catch (e) {
      throw e;
    }
  }

  const p = fetchComments(`${server}/comment`);

  onDestroy(function () {
    console.log("destroy");
  });
</script>

<section class="OvO">
  <Editor {placeholder} {emoji} />
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
