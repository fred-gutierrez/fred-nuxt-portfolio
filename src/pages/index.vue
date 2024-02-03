<template>
  <AboutMe />
  <Projects />
  <Skills />
</template>

<script lang="ts">
import gsap from "gsap";

export default {
  mounted() {
    var tl = gsap.timeline({
      delay: 2,
    });
    tl.from(".global-animation", {
      y: 15,
      duration: 1,
      opacity: 0,
      stagger: 0.25,
    });
  },
};
</script>
