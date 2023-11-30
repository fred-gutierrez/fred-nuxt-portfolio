<template>
  <h1 class="text-2xl dark:text-white text-black font-bold">Skills</h1>
  <p class="dark:text-white text-dark">
    Sort by:
    <span ref="activeBtn" class="inline-flex gap-1">
      <button
        @click="changeActiveBtn('all')"
        :class="dynamicClass"
        class="px-3 rounded"
      >
        All
      </button>
      <button
        @click="changeActiveBtn('frontend')"
        :class="dynamicClass"
        class="px-3 rounded"
      >
        Frontend
      </button>
      <button
        @click="changeActiveBtn('backend')"
        :class="dynamicClass"
        class="px-3 rounded"
      >
        Backend
      </button>
      <button
        @click="changeActiveBtn('tools')"
        :class="dynamicClass"
        class="px-3 rounded"
      >
        Tools
      </button>
    </span>
  </p>
  <div v-for="skill in backend">{{ skill.skillName }}</div>
  <div v-for="skill in frontend">{{ skill.skillName }}</div>
  <div v-for="skill in tools">{{ skill.skillName }}</div>
</template>

<script setup lang="ts">
import backend from "@/data/backendData";
import frontend from "@/data/frontendData";
import tools from "@/data/toolsData";

const activeBtn = ref(false);

let dynamicClass = activeBtn
  ? "dark:bg-neutral-50 bg-neutral-900 dark:text-black text-white"
  : "dark:bg-neutral-700 bg-neutral-300 dark:text-white text-white";

function changeActiveBtn(selection: string) {
  if (selection) {
  }
}
</script>
