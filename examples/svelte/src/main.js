import App from "./App.svelte";
import "@ovojs/ovo/dist/style.css";
import "./global.css";

const app = new App({
  target: document.getElementById("app")
})

export default app;