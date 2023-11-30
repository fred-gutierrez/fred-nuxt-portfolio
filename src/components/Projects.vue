<template>
  <section class="mt-5">
    <h1 class="text-2xl dark:text-white text-black font-bold">Projects</h1>
    <div v-for="item in projectsData" class="mt-3 mb-5">
      <div class="inline-flex">
        <p>
          <span class="dark:text-white text-black underline text-md font-bold">
            {{ item.projectName }}
          </span>
          <span class="dark:text-neutral-400 text-neutral-500 italic">
            - {{ item.madeWith }}</span
          >
        </p>
      </div>
      <p class="dark:text-white text-black mt-1">{{ item.description }}</p>
      <div class="dark:text-neutral-200 text-neutral-800 mt-2">
        <span
          ><a class="underline" :href="item.url" target="_blank">{{
            item.typeOfProject === "Extension" ? "Demo" : "Website"
          }}</a>
          -
          <a class="underline" :href="item.gitRepo" target="_blank"
            >GitHub Repo</a
          >
          <span v-if="item.chromeUrl && item.firefoxUrl">
            -
            <a class="underline" :href="item.chromeUrl" target="_blank"
              >Chrome</a
            >
            -
            <a class="underline" :href="item.firefoxUrl" target="_blank"
              >Firefox</a
            >
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import projectsData from "@/data/projectsData";
</script>
