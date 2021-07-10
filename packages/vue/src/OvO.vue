<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OvO from "@ovojs/ovo";
import "@ovojs/ovo/dist/style.css";
import { OvOProps } from "./types";

export default defineComponent({
  // What the fuck is this boilerplatable shit?
  props: ['server', 'placeholder', 'emoji', 'timeout'],
  name: "OvO",
  mounted() {
    new OvO({
      target: this.$el,
      props: this.$props as OvOProps
    })
  }
})
</script>