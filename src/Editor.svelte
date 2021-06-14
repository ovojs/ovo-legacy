<script lang="ts">
  import FacePicker from "./FacePicker.svelte";
  import wordcount from "./wordcount";
  import markdown from "./markdown";
  import type { Emoji } from "./types";

  export let placeholder = "说点什么吧~";
  export let emoji = "";

  let textarea: HTMLTextAreaElement;
  let previewing = false;
  let value = "";
  let html = "";

  $: count = wordcount(value);

  $: if (previewing) {
    html = markdown(value);
  }

  function insertEmoji(e: CustomEvent<Emoji>) {
    const emoji = e.detail.text;
    const start = textarea.selectionStart,
      end = textarea.selectionEnd;

    value =
      value.substring(0, start) + emoji + value.substring(end, value.length);

    textarea.selectionStart = start + emoji.length;
    textarea.selectionEnd = start + emoji.length;
    textarea.focus();
  }
</script>

<div class="OvO">
  <div class="info">
    <input type="text" placeholder="昵称" />
    <input type="email" placeholder="邮箱" />
    <input type="url" placeholder="网址" />
  </div>
  <textarea bind:this={textarea} bind:value {placeholder} />
  <div class="preview" class:open={previewing}>{@html html}</div>
  <div class="action">
    <FacePicker {emoji} on:change={insertEmoji} />
    <div class="btn" data-active="{previewing}" on:click={() => (previewing = !previewing)}>预览</div>
    <div />
    <div>{count} 字</div>
    <div class="btn">发布</div>
  </div>
</div>

<style>
  .OvO {
    width: 100%;
    max-width: 800px;
    font-size: 14px;
    color: #444;
  }

  textarea {
    width: 100%;
    min-height: 8em;
    box-sizing: border-box;
    resize: vertical;
  }

  input,
  textarea,
  .preview {
    padding: 10px;
    outline: none;
  }

  .preview {
    display: none;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .action {
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
  }

  div.open {
    display: block;
  }

  input {
    border: 0;
  }
</style>
