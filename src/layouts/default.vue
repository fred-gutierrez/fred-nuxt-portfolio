<template>
  <div class="dark:bg-neutral-900 bg-neutral-200 min-h-screen">
    <Welcome />
    <div class="topBar h-4 w-full dark:bg-netural-600 bg-neutral-500"></div>
    <div class="topBar h-4 w-full dark:bg-neutral-700 bg-neutral-400"></div>
    <div class="topBar h-4 w-full dark:bg-neutral-800 bg-neutral-300"></div>
    <section class="py-10 mx-10 sm:mx-20 md:mx-32 lg:mx-64 xl:mx-80 2xl:mx-96">
      <NuxtPage />
    </section>
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css");
@import url("https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css");

body {
  font-family: "Inter", sans-serif;
}
</style>
