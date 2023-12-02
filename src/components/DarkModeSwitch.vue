<template>
  <button ref="darkMode" class="media-btn" @click="darkModeSwitch">
    <i v-if="darkMode" class="fa-regular fa-moon fa-xl"></i>
    <i v-else class="fa-regular fa-sun-bright fa-xl"></i>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  data() {
    return {
      darkMode: ref(false),
    };
  },
  methods: {
    darkModeSwitch() {
      this.darkMode = !this.darkMode;

      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      if (process.client) {
        localStorage.setItem("darkMode", this.darkMode.toString());
      }
    },
  },
  mounted() {
    if (this.darkMode || localStorage.getItem("darkMode") == "true") {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.add("dark");
    }
  },
};
</script>
