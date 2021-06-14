<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Emoji, EmojiSource } from "./types";

  export let emoji = "";

  let open = false;

  const dispatch = createEventDispatcher();

  function select(e: Emoji) {
    return () => {
      dispatch("change", e);
    };
  }

  async function fetchEmojis(url: string): Promise<EmojiSource> {
    if (!url) {
      throw new Error("no emoji source provided");
    }

    const res = await fetch(url);
    try {
      if (res.ok) {
        const e = await res.json();
        return e;
      }
    } catch(e) {
      throw e;
    }
  }

  const promise = fetchEmojis(emoji);
</script>

<div tabindex="0" on:blur={() => (open = false)}>
  <div class="btn" data-active={open} on:click={() => (open = !open)}>表情</div>
  <div class:open class="detail">
    {#await promise}
      加载中...
    {:then source} 
      <ul>
        {#each source.temoji as e}
          <li title={e.title} on:click={select(e)}>{e.text}</li>
        {/each}
      </ul>
    {/await}
  </div>
</div>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    font-size: 12px;
  }

  li {
    list-style-type: none;
    margin: 0 10px 12px 0;
    padding: 5px 10px;
    border-radius: 5px;
    background: #f7f7f7;
    cursor: pointer;
  }

  li:hover {
    background: #eee;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  div {
    position: relative;
  }

  .detail {
    display: none;
    width: 400px;
    height: 250px;
    position: absolute;
    top: 40px;
    left: 0;
    background: #fff;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: auto;
  }

  div.open {
    display: block;
  }
</style>
