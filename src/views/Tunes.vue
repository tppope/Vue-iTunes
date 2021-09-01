<template>
  <div>
    <h1>Tunes</h1>
    <tunes-search-form />
    <tunes-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TunesSearchForm from "@/components/tunes/TunesSearchForm.vue";
import TunesList from "@/components/tunes/TunesList.vue";

export default defineComponent({
  name: "Tunes",
  components: {
    TunesList,
    TunesSearchForm,
  },
});
</script>

<style scoped></style>
