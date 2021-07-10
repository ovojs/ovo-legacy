<template>
  <OvO :server="server" :placeholder="placeholder" :timeout="timeout" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OvO from "@ovojs/vue";
import "@ovojs/vue/dist/style.css";

export default defineComponent({
  name: 'App',
  components: {
    OvO
  },
  data() {
    return {
      server: "https://ovo-svr.ibox.moe",
      placeholder: "说点什么吧～",
      timeout: 10000
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
