<script>
  import OvO from "@ovojs/ovo";
  import Switch from "./Switch.svelte";

  const server = "https://ovo-svr.ibox.moe";

  let checked = false;
  let theme = "light";

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
    <a href="https://github.com/Mivinci/OvO">GitHub</a>. Docs in
    <a href="https://github.com/ovojs/OvO/blob/main/README.md">README</a>
  </p>
  <div>
    <Switch bind:checked />
    <span>{checked ? "开灯" : "关灯"}</span>
  </div>
  <OvO {server} />
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
</style>
