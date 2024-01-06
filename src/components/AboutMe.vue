<template>
  <section class="dark:text-white text-black">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Fred</h1>
      <div class="flex gap-5 items-center">
        <a href="https://www.linkedin.com/in/freddavidsolisgutierrez/" target="_blank">
          <i class="media-btn fa-brands fa-linkedin-in fa-xl"></i>
        </a>
        <a href="https://github.com/fred-gutierrez" target="_blank">
          <i class="media-btn fa-brands fa-github fa-xl"></i>
        </a>
        <DarkModeSwitch />
      </div>
    </div>
    <div class="text-2xl font-light">Software Developer</div>
  </section>

  <section class="dark:text-white text-black mt-2">
    <p class="mt-2 indent-1">
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
      y: 20,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    });
  },
};
</script>
