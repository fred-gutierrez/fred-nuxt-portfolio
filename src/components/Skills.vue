<template>
  <h1 class="text-3xl dark:text-white text-black font-bold pt-6">Skills</h1>
  <p class="dark:text-white text-dark my-1">
    Sort by:
    <span ref="activeBtn" class="inline-flex gap-1">
      <button
        v-for="category in categories"
        :key="nanoid"
        @click="changeActiveBtn(category.name)"
        :class="{
          'dark:bg-neutral-100 bg-neutral-900 dark:text-black text-white':
            activeBtn === category.name,
          'dark:bg-neutral-700 bg-neutral-300 dark:text-white text-black':
            activeBtn !== category.name,
        }"
        class="px-4 py-1 rounded"
      >
        {{ category.label }}
      </button>
    </span>
  </p>

  <section
    class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 mt-5"
  >
    <template v-for="category in categories">
      <template v-if="activeBtn === category.name">
        <div
          v-for="skill in category.skills"
          :key="nanoid()"
          class="skill-GSAP text-center pb-3"
        >
          <div class="flex justify-center">
            <img
              :src="skill.img"
              :alt="skill.skillName"
              class="h-16 2xl:h-20"
            />
          </div>
          <p class="dark:text-neutral-300 text-neutral-600 mt-1">
            {{ skill.skillName }}
          </p>
        </div>
      </template>
    </template>
  </section>
</template>

<script lang="ts">
import backend from "@/data/backendData";
import frontend from "@/data/frontendData";
import tools from "@/data/toolsData";
import gsap from "gsap";
import { nanoid } from "nanoid";

const allSkills = [...frontend, ...backend, ...tools];

export default {
  data() {
    return {
      activeBtn: ref("frontend"),
      categories: [
        { id: 1, name: "all", label: "All", skills: allSkills },
        { id: 2, name: "frontend", label: "Frontend", skills: frontend },
        { id: 3, name: "backend", label: "Backend", skills: backend },
        { id: 4, name: "tools", label: "Tools", skills: tools },
      ],
      nanoid,
    };
  },
  methods: {
    changeActiveBtn(selection: string) {
      this.playGsapAnimation();
      this.activeBtn = selection;
    },
    initialAnimation() {
      var tl = gsap.timeline({
        delay: 2,
      });
      tl.from(".skill-GSAP", { x: 30, duration: 1, stagger: 0.1, opacity: 0 });
    },
    playGsapAnimation() {
      gsap.from(".skill-GSAP", {
        x: 30,
        duration: 1,
        stagger: 0.1,
        opacity: 0,
      });
    },
  },
  mounted() {
    this.initialAnimation();
  },
  updated() {
    this.playGsapAnimation();
  },
};
</script>
