<script lang="ts">
  import Comment from "./Comment.svelte";
  import Editor from "./Editor.svelte";
  import { count } from "./dfs";
  import { comments } from "../testdata/comment.json";
  import type { Comments } from "./types";
  import Loading from "./Loading.svelte";

  export let placeholder = "说点什么吧~";
  export let emoji =
    "https://cdn.jsdelivr.net/gh/Spoience/DejavuMoe/emoji.json";

  export let comment =
    "https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo/comment";

  async function fetchComments(url: string): Promise<Comments> {
    const res = await fetch(url);

    try {
      if (!res.ok) {
        throw new Error("error fetching comments");
      }
      const c = await res.json();
      return c;
    } catch (e) {
      throw e;
    }
  }

  const promise = fetchComments(comment);
</script>

<Editor {placeholder} {emoji} />

{#await promise}
  <Loading />
{:then c}
  <h3>评论 {count(c.comments)}</h3>
  <Comment comments={c.comments} />
{/await}

<style>
  h3 {
    margin-bottom: 0;
  }
</style>
