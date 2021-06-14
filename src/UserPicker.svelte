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

  function select(name: string) {
    dispatch("change", name);
  }
</script>

<Drop title="@">
  <ul class="ovo-ul">
    {#each us as n}
      <li class="ovo-li ovo-ptr" on:click={() => select(n.name)}>{n.name} ({n.website})</li>
    {/each}
  </ul>
</Drop>

<style>
  @media (max-width: 600px) {
    ul {
      max-width: calc(100vw - 10em);
      overflow: auto;
    }
  }
</style>
