<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Drop from "./Drop.svelte";
  import { users } from "./store";

  let names: string[] = [];

  $: if ($users) {
    names = [];
    $users.forEach(user => names.push(user.name));
  }

  const dispatch = createEventDispatcher();

  function select(name: string) {
    dispatch("change", name);
  }
</script>

<Drop title="@">
  <ul class="ovo-ul">
    {#each names as n}
      <li class="ovo-li ovo-ptr" on:click={() => select(n)}>{n}</li>
    {/each}
  </ul>
</Drop>
