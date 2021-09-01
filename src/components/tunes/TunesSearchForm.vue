<template>
  <form @submit.prevent="getMusic()">
    <input ref="input" v-model="query" type="text" @input="search" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { debounce } from "lodash";
import { Song } from "@/types";

export default defineComponent({
  name: "TunesSearchForm",
  data() {
    return {
      query: "" as string,
    };
  },
  methods: {
    search: debounce(function () {
      this.getMusic();
    }, 500),
    getMusic(): void {
      axios
        .get(
          "https://itunes.apple.com/search" +
            "?term=" +
            encodeURI(this.query) +
            "&entity=musicTrack" +
            "&limit=5"
        )
        .then((response) => {
          let iTunesSongs: Song[] = response.data.results
            .filter((song) => song.kind === "song")
            .map((song) => this.extractData(song));
          window.eventBus.emit("new-songs-have-arrived", iTunesSongs);
        });
    },
    extractData({
      trackId: id,
      trackName: title,
      artistName: artist,
      previewUrl: audioFile,
      artworkUrl100: artwork,
      collectionName: album,
    }) {
      return {
        id,
        title,
        artist,
        audioFile,
        artwork,
        album,
      } as Song;
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  display: block;

  padding: {
    top: 0.5em;
    bottom: 0.5em;
    left: 2.95em;
    right: 0.75em;
  }

  color: #333;
  font-size: 1.5em;
  font-weight: 700;

  border: none;
  border-radius: 0.5em;
  background: white;
  box-sizing: border-box;

  outline: none;
  appearance: none;

  background: {
    image: url("../../assets/search.svg");
    repeat: no-repeat;
    position-y: 50%;
    position-x: 1em;
    color: white;
    size: 1em;
  }
}

@media screen and (max-width: 520px) {
  input {
    font-size: 1.15em;
  }
}
</style>
