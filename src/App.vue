<template>
  <header>
    <the-navigation />
  </header>
  <main class="content">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default defineComponent({
  components: { TheNavigation },
});
</script>

<style src="@/assets/scss/main.scss" lang="scss"></style>
