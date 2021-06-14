<script lang="ts">
  import FacePicker from "./FacePicker.svelte";
  import wordcount from "./wordcount";
  import markdown from "./markdown";
  import { reply } from "./store";
  import UserPicker from "./UserPicker.svelte";
  import type { Emoji } from "./types";

  export let placeholder = "说点什么吧~";
  export let emoji = "";
  export let server = "";

  let textarea: HTMLTextAreaElement;
  let previewing = false;
  let value = "";
  let html = "";

  let name = "",
    email = "",
    website = "";

  $: count = wordcount(value);

  $: if (previewing) {
    html = markdown(value);
  }

  function insert(text: string) {
    const start = textarea.selectionStart,
      end = textarea.selectionEnd;

    value =
      value.substring(0, start) + text + value.substring(end, value.length);

    textarea.selectionStart = start + emoji.length;
    textarea.selectionEnd = start + emoji.length;
    textarea.focus();
  }

  function insertEmoji(e: CustomEvent<Emoji>) {
    const emoji = e.detail.text;
    insert(emoji);
  }

  function insertUser(e: CustomEvent<string>) {
    const user = `@${e.detail} `;
    insert(user);
  }

  $: if ($reply) {
    placeholder = `回复#${$reply.id}`;
    if (textarea) {
      textarea.focus();
    }
  }

  let disabled = false;

  function submit() {
    if (disabled) return;

    html = html || markdown(value);
    name = name || "匿名";

    console.log($reply);
    console.log(html);
    console.log(name);
    console.log(email);
    console.log(website);
    console.log(server);

    alert('服务端正在开发中哦 ヾ(≧∇≦*)ゝ\n关注 https://github/mivinci/OvO 了解开发进度');
  }
</script>

<div class="OvO">
  <div class="info">
    <input type="text" placeholder="昵称" bind:value={name} />
    <input type="email" placeholder="邮箱" bind:value={email} />
    <input type="url" placeholder="网址" bind:value={website} />
  </div>
  <textarea bind:this={textarea} bind:value {placeholder} />
  <div class="preview" class:open={previewing}>{@html html}</div>
  <div class="action">
    <FacePicker {emoji} on:change={insertEmoji} />
    <div
      class="ovo-btn"
      data-active={previewing}
      on:click={() => (previewing = !previewing)}
    >
      预览
    </div>
    <UserPicker on:change={insertUser} />
    <div />
    <div>{count} 字</div>
    <div class="ovo-btn" data-disabled={disabled} on:click={submit}>发布</div>
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
    grid-template-columns: repeat(3, auto) 1fr repeat(2, auto);
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

  :global(.preview a) {
    color: var(--ovo-pm);
    text-decoration: none;
  }
</style>
