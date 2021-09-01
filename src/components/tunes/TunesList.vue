<template>
  <transition-group tag="ul" class="tunes-list" name="fade">
    <li v-for="song in songs" :key="song.id">
      <tunes-song :song="song" />
    </li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TunesSong from "@/components/tunes/TunesSong.vue";

export default defineComponent({
  name: "TunesList",
  components: { TunesSong },
  data() {
    return {
      songs: [],
    };
  },
  mounted() {
    window.eventBus.on("new-songs-have-arrived", (data: []) => {
      this.songs = data;
    });
  },
});
</script>

<style lang="scss" scoped>
.tunes-list {
  margin: 3em 0 0;
  padding-left: 0;
  list-style: none;
}

li:last-child {
  .tunes-song {
    margin-bottom: 1.25em;
  }
}

// animation
.fade-enter-active {
  transition: all 0.25s ease;
}

.fade-enter-from {
  transform: scale(0.85);
}
</style>
