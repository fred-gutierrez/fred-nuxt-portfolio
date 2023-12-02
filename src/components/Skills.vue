<template>
  <h1 class="text-3xl dark:text-white text-black font-bold pt-8">Skills</h1>
  <p class="dark:text-white text-dark my-1">
    Sort by:
    <span ref="activeBtn" class="inline-flex gap-1">
      <button
        @click="changeActiveBtn('all')"
        :class="
          activeBtn === 'all'
            ? 'dark:bg-neutral-50 bg-neutral-900 dark:text-black text-white'
            : 'dark:bg-neutral-700 bg-neutral-300 dark:text-white text-black'
        "
        class="px-4 py-1 rounded"
      >
        All
      </button>
      <button
        @click="changeActiveBtn('frontend')"
        :class="
          activeBtn === 'frontend'
            ? 'dark:bg-neutral-50 bg-neutral-900 dark:text-black text-white'
            : 'dark:bg-neutral-700 bg-neutral-300 dark:text-white text-black'
        "
        class="px-4 py-1 rounded"
      >
        Frontend
      </button>
      <button
        @click="changeActiveBtn('backend')"
        :class="
          activeBtn === 'backend'
            ? 'dark:bg-neutral-50 bg-neutral-900 dark:text-black text-white'
            : 'dark:bg-neutral-700 bg-neutral-300 dark:text-white text-black'
        "
        class="px-4 py-1 rounded"
      >
        Backend
      </button>
      <button
        @click="changeActiveBtn('tools')"
        :class="
          activeBtn === 'tools'
            ? 'dark:bg-neutral-50 bg-neutral-900 dark:text-black text-white'
            : 'dark:bg-neutral-700 bg-neutral-300 dark:text-white text-black'
        "
        class="px-4 py-1 rounded"
      >
        Tools
      </button>
    </span>
  </p>

  <section
    class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 mt-5"
  >
    <template v-if="activeBtn === 'frontend' || activeBtn === 'all'">
      <div
        v-for="skill in frontend"
        :key="nanoid"
        class="skill-GSAP text-center mb-2"
      >
        <div class="flex justify-center">
          <img :src="skill.img" :alt="skill.skillName" class="h-16 2xl:h-20" />
        </div>
        <p
          class="dark:text-neutral-300 text-neutral-600 mt-1"
        >
          {{ skill.skillName }}
        </p>
      </div>
    </template>

    <template v-if="activeBtn === 'backend' || activeBtn === 'all'">
      <div
        v-for="skill in backend"
        :key="nanoid"
        class="skill-GSAP text-center mb-2"
      >
        <div class="flex justify-center">
          <img :src="skill.img" :alt="skill.skillName" class="h-16 2xl:h-20" />
        </div>
        <p
          class="dark:text-neutral-300 text-neutral-600 mt-1"
        >
          {{ skill.skillName }}
        </p>
      </div>
    </template>

    <template v-if="activeBtn === 'tools' || activeBtn === 'all'">
      <div
        v-for="skill in tools"
        :key="nanoid"
        class="skill-GSAP text-center mb-2"
      >
        <div class="flex justify-center">
          <img :src="skill.img" :alt="skill.skillName" class="h-16 2xl:h-20" />
        </div>
        <p
          class="dark:text-neutral-300 text-neutral-600 mt-1"
        >
          {{ skill.skillName }}
        </p>
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import backend from "@/data/backendData";
import frontend from "@/data/frontendData";
import tools from "@/data/toolsData";
import gsap from "gsap";
import { nanoid } from "nanoid";

export default {
  data() {
    return {
      activeBtn: ref("frontend"),
      backend,
      frontend,
      tools,
      nanoid,
    };
  },
  methods: {
    changeActiveBtn(selection: string): string {
      this.activeBtn = selection;
      return selection;
    },
  },
  mounted() {
    var tl = gsap.timeline({
      delay: 2,
    });
    tl.from(".skill-GSAP", { x: 30, duration: 1, stagger: 0.1, opacity: 0 });
  },
};
</script>
