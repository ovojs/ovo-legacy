<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Drop from "./Drop.svelte";
  import { users } from "./store";
  import type { User } from "./types";

  let us: User[] = [];

  $: if ($users) {
    us = [];
    $users.forEach((user) => us.push(user));
  }

  const dispatch = createEventDispatcher();

  function select(name: User) {
    dispatch("change", name);
  }
</script>

<Drop title="@">
  <ul class="ovo-ul">
    {#if us.length}
      {#each us as u}
        <li class="ovo-li ovo-ptr" on:click={() => select(u)}>
          {u.name} ({u.website})
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
