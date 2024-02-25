<template>
  <div class="dark:bg-neutral-900 bg-neutral-200 min-h-screen">
    <Welcome />
    <div class="topBar h-4 w-full dark:bg-netural-600 bg-neutral-500"></div>
    <div class="topBar h-4 w-full dark:bg-neutral-700 bg-neutral-400"></div>
    <div class="topBar h-4 w-full dark:bg-neutral-800 bg-neutral-300"></div>
    <div class="flex justify-center">
      <section class="py-10 mx-10 sm:mx-20 md:mx-32 lg:mx-64 xl:mx-80 max-w-172">
        <NuxtPage />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import gsap from "gsap";

export default {
  mounted() {
    var tl = gsap.timeline({
      delay: 2,
    });
    tl.from(".topBar", { y: -10, opacity: 0, duration: 1, stagger: 0.3 });
  },
};
</script>

<style>
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css");

body {
  font-family: Inter;
}
</style>
