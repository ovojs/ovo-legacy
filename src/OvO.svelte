<script lang="ts">
  import Comment from "./Comment.svelte";
  import Editor from "./Editor.svelte";

  export let placeholder = "说点什么吧~";
  export let emoji = "https://cdn.jsdelivr.net/gh/Spoience/DejavuMoe/emoji.json"
</script>

<Editor {placeholder} {emoji} />
<h3>评论 23</h3>
<Comment />
