<script lang="ts">
  import FacePicker from "./FacePicker.svelte";
  import IssuerPicker from "./IssuerPicker.svelte";
  import wordcount from "./wordcount";
  import tohtml from "./markdown";
  import { reply } from "./store";
  import type { Emoji, ID, Locale, ReplyPostParams, ReplyTo, Issuer, Reply } from "./types";
  import HTTP from "./http";
  import EventEmitter from "./event";

  export let locale: Locale;
  // TODO: bug that placeholder won't update when locale changes.
  export let placeholder = locale.editor.placeholder;
  export let emoji = "";

  const WORDS_LIMIT = 400;

  let textarea: HTMLTextAreaElement;
  let previewing = false;
  let disabled = false;
  let refint = "";
  let value = "";
  let html = "";

  export let issuer = "",
    issuer_email = "",
    issuer_website = "";

  $: count = wordcount(value);

  $: if (previewing) {
    html = tohtml(value);
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

  function insertUser(e: CustomEvent<Issuer>) {
    const name = `@${e.detail.issuer} `;
    insert(name);
  }

  function insertRef(id: ID) {
    const ref = `#${id} `;
    insert(ref);
  }

  $: if ($reply) {
    placeholder = `${locale.comment.reply}#${$reply.id}`;
    refint = placeholder;
    if (textarea) {
      textarea.focus();
    }
  }

  function reset() {
    reply.update(() => null);
    placeholder = locale.editor.placeholder;
    value = "";
    html = "";
    refint = "";
    previewing = false;
  }

  EventEmitter.on("refresh", reset);
  EventEmitter.on("ref", insertRef);

  async function submit() {
    if (disabled) return;

    disabled = true;

    html = html || tohtml(value);

    // In case that I forget what variables can be used in this scope.
    // console.log("reply:", $reply);
    // console.log("content:", html);
    // console.log("name:", name);
    // console.log("email:", email);
    // console.log("website:", website);
    // console.log("server", server);

    let replyto: ReplyTo;
    const ps = {} as ReplyPostParams

    if ($reply) {
      const { cid, id } = $reply as Reply;
        // *** This is important ***
        // A null cid indicates the user is replying to a comment,
        // otherwise to a reply that has `id`.
        // If the user is replying to a reply that indicates a null 
        // cid, then target cid should be assigned the value of the 
        // id of the reply, otherwise the cid the reply refers to.
      ps.cid = cid || id;
      ps.rid = cid ? id : 0;
    } else {
      ps.domain = encodeURIComponent(location.host)
      ps.path = encodeURIComponent(location.pathname)
    }

    const iss = { issuer, issuer_email, issuer_website };

    ps.issuer = issuer;
    ps.issuer_website = issuer_website;
    ps.issuer_email = issuer_email;

    ps.content = html;

    localStorage.issuer = JSON.stringify(iss);

    try {
      if ($reply) {
        await HTTP.postReply(ps);
      } else {
        await HTTP.postComment(ps);
      }
    } catch (e) {
      alert(e.message);
      return;
    } finally {
      disabled = false;
    }

    alert(locale.editor.success);
    EventEmitter.emit("refresh");

    // alert(
    //   "服务端正在开发中哦 ヾ(≧∇≦*)ゝ\n关注 https://github.com/ovojs/ovo 了解开发进度"
    // );
  }
</script>

<form on:submit|preventDefault={submit}>
  <div class="info">
    <input
      type="text"
      placeholder={locale.editor.name}
      bind:value={issuer}
      required
    />
    <input
      type="email"
      placeholder={locale.editor.email}
      bind:value={issuer_email}
      required
    />
    <input
      type="url"
      placeholder={locale.editor.website}
      bind:value={issuer_website}
      required
    />
  </div>
  <textarea bind:this={textarea} bind:value {placeholder} required />
  <div class="preview" class:open={previewing}>{@html html}</div>
  <div class="action">
    <FacePicker {emoji} {locale} on:change={insertEmoji} />
    <IssuerPicker on:change={insertUser} />
    <div
      class="ovo-btn"
      data-active={previewing}
      on:click={() => (previewing = !previewing)}
    >
      {locale.editor.preview}
    </div>
    
    <div class="ovo-oa-x">{refint}</div>
    <div />
    <div class="ovo-oa-x">{count} / {WORDS_LIMIT}</div>
    <button class="ovo-btn" type="submit" data-disabled={disabled}>
      {disabled ? `${locale.editor.waiting}` : `${locale.editor.submit}`}
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
