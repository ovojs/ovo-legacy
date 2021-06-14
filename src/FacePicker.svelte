<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Drop from "./Drop.svelte";
  import Loading from "./Loading.svelte";
  import type { Emoji, EmojiSource } from "./types";

  export let emoji = "";

  const dispatch = createEventDispatcher();

  function select(e: Emoji) {
    dispatch("change", e);
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
    } catch (e) {
      throw e;
    }
  }

  const promise = fetchEmojis(emoji);
</script>

<Drop title="表情">
  <div class="emoji">
    {#await promise}
      <Loading />
    {:then source}
      <ul class="ovo-ul">
        {#each source.temoji as e}
          <li title={e.title} on:click={() => select(e)}>{e.text}</li>
        {/each}
      </ul>
    {/await}
  </div>
</Drop>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
  }

  li {
    list-style-type: none;
    margin: 0 10px 12px 0;
    padding: 5px 10px;
    border-radius: 5px;
    background: var(--ovo-tag);
    cursor: pointer;
  }

  li:hover {
    background: var(--ovo-bg-hvr);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .emoji {
    width: 400px;
    height: 250px;
    padding: 10px;
    overflow: auto;
  }

  @media (max-width: 600px) {
    .emoji {
      width: calc(100vw - 3em);
      height: 200px;
    }
  }
</style>
