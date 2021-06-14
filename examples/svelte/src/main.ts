import App from "./App.svelte";
import "./global.css";
import "../../../src/global.css";

const app = new App({
  target: document.getElementById("app")
})

export default app;