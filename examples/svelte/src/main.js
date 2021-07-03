import App from "./App.svelte";
import "../../../dist/style.css";
import "./global.css";

const app = new App({
  target: document.getElementById("app")
})

export default app;