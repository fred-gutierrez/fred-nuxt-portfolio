<template>
  <div ref="innerHTML">
    <div
      class="tempbg fixed h-full w-full bg-neutral-900 flex items-center"
    >
      <p class="text text-white mx-auto font-semibold text-5xl opacity-0">
        Welcome!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.fromTo(
      ".text",
      { y: 100, opacity: 0, duration: 1 },
      { y: 0, opacity: 1, duration: 1 },
    );
    gsap.to(".tempbg", { delay: 2, opacity: 0, duration: 1 });
    gsap.timeline({
      delay: 3,
      onComplete: () => (this.$refs.innerHTML.innerHTML = ""),
    });
  },
};
</script>
