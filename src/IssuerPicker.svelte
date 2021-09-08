<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Drop from "./Drop.svelte";
  import { issuers } from "./store";
  import type { Issuer } from "./types";

  let isss: Issuer[] = [];

  $: if ($issuers) {
    isss = [];
    $issuers.forEach(iss => isss.push(iss));
  }

  const dispatch = createEventDispatcher();

  function select(iss: Issuer) {
    dispatch("change", iss);
  }
</script>

<Drop title="@">
  <ul class="ovo-ul">
    {#if isss.length}
      {#each isss as iss}
        <li class="ovo-li ovo-ptr" on:click={() => select(iss)}>
          {iss.issuer} ({iss.issuer_website})
        </li>
      {/each}
    {:else}
      <div>没有可以 @ 的人呢</div>
    {/if}
  </ul>
</Drop>

<style>
  @media (max-width: 600px) {
    ul {
      max-width: calc(100vw - 10em);
      overflow: auto;
    }
  }

  div {
    padding: 1em;
  }
</style>
