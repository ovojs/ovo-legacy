<script lang="ts">
  import OvO from "../../../src/OvO.svelte"; // for debuging
  import Switch from "./Switch.svelte";
  import langs from "./locales";

  const server = "https://ovo-svr.ibox.moe";

  let checked = false;
  let theme = "light";
  let lang = "简体中文";

  $: locale = langs[lang];

  try {
    theme = localStorage.theme;
    checked = theme === "dark";
  } catch (e) {}

  $: {
    const { classList } = document.querySelector("html");
    classList.remove(theme);
    theme = checked ? "dark" : "light";
    classList.add(theme);

    try {
      localStorage.theme = theme;
    } catch (e) {}
  }
</script>

<main>
  <h1>OvO</h1>
  <h2>A Svelte Web Component for Comments</h2>
  <p>
    Inspired by <a href="https://github.com/DIYgod/OwO">OωO</a>. Available on
    <a href="https://github.com/ovojs/OvO">GitHub</a>. Docs in
    <a href="https://github.com/ovojs/OvO/blob/main/README.md">README</a>
  </p>
  <div>
    <div>
      <span>{checked ? "🌑" : "🌞"}</span>
      <Switch bind:checked />
    </div>
    <div>
      <span></span>
      <select bind:value={lang}>
        {#each Object.keys(langs) as l}
          <option value={l}>{l}</option>
        {/each}
      </select>
    </div>
  </div>
  <OvO {locale} />
</main>

<style>
  main {
    width: 600px;
    margin: auto;
    box-sizing: border-box;
    color: var(--ft);
  }

  @media (max-width: 600px) {
    main {
      width: 100vw;
      margin: 0;
      padding: 0 10px;
    }
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

  div {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 5px 0;
  }

  select {
    background: transparent;
    color: var(--ft);
    padding: .1em;
    border-radius: 4px;
    border-color: var(--bdr);
    transition: all .5s;
  }
</style>
