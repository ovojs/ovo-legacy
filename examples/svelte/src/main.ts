import App from "./App.svelte";
import "../../../src/global.css"; // for debuging
import "./global.css";

const app = new App({
  target: document.getElementById("app")
})

export default app;