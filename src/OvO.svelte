<script lang="ts">
  import Editor from "./Editor.svelte";
  import dfs from "./dfs";
  import type { Comments, Comment, Issuer } from "./types";
  import { onDestroy, onMount } from "svelte";
  import HTTP from "./http";
  import Sentinal from "./Sentinal.svelte";
  import List from "./List.svelte";
  import EventEmitter from "./event";
  import { issuers } from "./store";
  import zh from "./locales/zh-Hans.json";

  export let locale = zh;
  export let placeholder = locale.editor.placeholder;
  export let emoji =
    "https://cdn.jsdelivr.net/gh/DejavuMoe/DejavuMoe/emoji.json";

  export let server =
    "https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo";

  export let timeout = 8000;

  HTTP.init({ server, timeout });

  const iss = new Map<string, Issuer>();

  let done: boolean;
  let page: number;
  let total: number;
  let comments: Comment[];
  let next: Comments;
  let me: Issuer;

  reset();

  onMount(function () {
    const cache = localStorage.issuer;
    if (cache) {
      me = JSON.parse(cache);
    }
  });

  onDestroy(function () {
    console.log("OvO was destroyed");
  });

  async function more(e?: CustomEvent<IntersectionObserverEntry>) {
    if (done) return;

    page++;

    try {
      next = await HTTP.getComments({
        domain: location.host,
        path: location.pathname,
        page,
      });
    } catch (e) {
      page--;
      done = true;
      throw e;
    }

    done = next.done;

    comments = [...comments, ...next.comments];

    total = 0;
    iss.clear();

    dfs(comments, function ({ issuer, issuer_website, issuer_email }: Comment) {
      total++;
      if (issuer) {
        iss.set(issuer, { issuer, issuer_website, issuer_email });
      }
    });

    issuers.set(iss);
  }

  function reset() {
    comments = null; // emits gc?
    comments = [];
    page = -1;
    total = 0;
    done = false;
    iss.clear();
  }

  EventEmitter.on("refresh", reset);
</script>

<section class="OvO">
  <Editor {placeholder} {emoji} {locale} {...me} />

  {#if comments}
    <h3>{locale.comment.title} {total}</h3>
    <List {comments} {locale} />
  {/if}

  <Sentinal on:visiable={more} {done} {locale} />
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
