<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";

  export let done = false;

  let el: HTMLElement;

  const dispatch = createEventDispatcher();

  const observer = new IntersectionObserver(
    function (entries: IntersectionObserverEntry[]) {
      if (entries[0].intersectionRatio <= 0.8) return;

      dispatch("visiable", entries[0]);
    },
    { threshold: [0.8] }
  );

  onMount(function () {
    observer.observe(el);
  });

  onDestroy(function () {
    observer.disconnect();
  });
</script>

<div class="ovo-s" bind:this={el}>{done ? "到底啦 OvO" : "加载中"}</div>

<style>
  div {
    width: 100%;
    line-height: 6em;
    text-align: center;
  }
</style>
