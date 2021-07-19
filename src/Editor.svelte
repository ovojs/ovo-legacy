<script lang="ts">
  import FacePicker from "./FacePicker.svelte";
  import UserPicker from "./UserPicker.svelte";
  import wordcount from "./wordcount";
  import markdown from "./markdown";
  import { reply } from "./store";
  import type { Emoji, ID, ReplyPostParams, ReplyTo } from "./types";
  import HTTP from "./http";
  import EventEmitter from "./event";

  export let placeholder = "说点什么吧~";
  export let emoji = "";

  let textarea: HTMLTextAreaElement;
  let previewing = false;
  let disabled = false;
  let refint = "";
  let value = "";
  let html = "";

  export let name = "",
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

  function insertRef(id: ID) {
    const ref = `#${id} `;
    insert(ref);
  }

  $: if ($reply) {
    placeholder = `回复#${$reply.id}`;
    refint = placeholder;
    if (textarea) {
      textarea.focus();
    }
  }

  function reset() {
    reply.update(() => null);
    textarea.placeholder = "说点什么吧～";
    textarea.value = "";
    refint = "";
    previewing = false;
  }

  EventEmitter.on("refresh", reset);
  EventEmitter.on("ref", insertRef);

  async function submit() {
    if (disabled) return;

    disabled = true;

    html = html || markdown(value);

    // In case that I forget what variables can be used in this scope.
    // console.log("reply:", $reply);
    // console.log("content:", html);
    // console.log("name:", name);
    // console.log("email:", email);
    // console.log("website:", website);
    // console.log("server", server);

    let replyTo: ReplyTo;

    if ($reply) {
      const { cid, id } = $reply;
      replyTo = {
        // *** This is important ***
        // A null cid indicates the user is replying to a comment,
        // otherwise to a reply that has `id`.
        // If the user is replying to a comment that is cid being null,
        // replyTo.cid should be assigned the value of the id of the
        // comment, otherwise the cid the reply belongs to.
        cid: cid || id,
        rid: cid ? id : null,
      };
    }

    const user = { name, email, website };

    const params: ReplyPostParams = {
      domain: location.hostname,
      path: location.pathname,
      content: html,
      user,
      ...replyTo,
    };

    localStorage.user = JSON.stringify(user);

    try {
      if ($reply) {
        await HTTP.postReply(params);
      } else {
        await HTTP.postComment(params);
      }
    } catch (e) {
      alert(e.message);
      return;
    } finally {
      disabled = false;
    }

    alert("发布成功 φ(￣∇￣o)");
    EventEmitter.emit("refresh");

    // alert(
    //   "服务端正在开发中哦 ヾ(≧∇≦*)ゝ\n关注 https://github.com/ovojs/ovo 了解开发进度"
    // );
  }
</script>

<form on:submit|preventDefault={submit}>
  <div class="info">
    <input type="text" placeholder="昵称" bind:value={name} required />
    <input type="email" placeholder="邮箱" bind:value={email} required />
    <input type="url" placeholder="网址" bind:value={website} required />
  </div>
  <textarea bind:this={textarea} bind:value {placeholder} required />
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
    <div class="ovo-oa-x">{refint}</div>
    <div />
    <div>{count} 字</div>
    <button class="ovo-btn" type="submit" data-disabled={disabled}>
      {disabled ? "发布中" : "发布"}
    </button>
  </div>
</form>

<style>
  form {
    width: 100%;
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 33.3333%);
  }

  .action {
    display: grid;
    grid-template-columns: repeat(4, auto) 1fr repeat(2, auto);
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
