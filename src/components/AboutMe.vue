<template>
  <section class="dark:text-white text-black">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Fred</h1>
      <div class="flex gap-5 items-center">
        <DarkModeSwitch />
        <a href="https://www.linkedin.com/in/freddavidsolisgutierrez/" target="_blank">
          <i class="media-btn fa-brands fa-linkedin-in fa-xl"></i>
        </a>
        <a href="https://github.com/fred-gutierrez" target="_blank">
          <i class="media-btn fa-brands fa-github fa-xl"></i>
        </a>
      </div>
    </div>
    <div class="text-2xl font-light">Software Developer</div>
  </section>

  <section class="dark:text-neutral-200 text-neutral-800 mt-2">
    <p class="mt-2">
      Hey there! I'm Fred from Costa Rica, on a mission to create and deliver
      technology-advancing projects and products that make a positive impact on
      our world.
    </p>
  </section>
</template>

<script lang="ts">
import gsap from "gsap";

export default {
  mounted() {
    var tl = gsap.timeline({
      delay: 2,
    });
    tl.from(".media-btn", {
      y: 15,
      duration: 1,
      opacity: 0,
      stagger: 0.25,
    });
  },
};
</script>
