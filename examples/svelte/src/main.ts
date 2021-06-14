/// <reference types="svelte" />
import App from "./App.svelte";
import "../../../src/global.css";

const app = new App({
  target: document.getElementById("app")
})

export default app;