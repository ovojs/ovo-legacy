<script lang="ts">
  export let title = "";
  export let open = false;
</script>

<div class="drop" tabindex="0" on:blur={() => (open = false)}>
  <div class="ovo-btn" data-active="{open}" on:click={() => (open = !open)}>{title}</div>
  <div class="details ovo-bg ovo-bdr" class:open>
    <slot />
  </div>
</div>

<style>
  .drop {
    position: relative;
    outline: none;
  }

  .details {
    display: none;
    position: absolute;
    top: 39px;
  }

  div.open {
    display: block;
  }
</style>
