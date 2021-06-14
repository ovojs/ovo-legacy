<script lang="ts">
  import OvO from "../../../src/OvO.svelte";
</script>

<div>
  <h1>OvO</h1>
  <h2>A Super Tiny Web Component for Comments</h2>
  <p>
    Made by <a href="https://github.com/Mivinci">XJJ</a>.
    Inspired by <a href="https://github.com/DIYgod/OwO">OωO</a>.
    Available on <a href="https://github.com/Mivinci/OvO">GitHub</a>.
  </p>
  <OvO />
</div>

<style>
  div {
    width: 600px;
    margin: auto;
  }

  h1 {
    font-size: 54px;
    font-weight: bolder;
    margin-bottom: 0;
  }

  a {
    color: #08c;
    text-decoration: none;
  }

  p {
    font-weight: 500;
  }
</style>
