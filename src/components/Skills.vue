<template>
  <div v-for="skill in backend">{{ skill.skillName }}</div>
</template>

<script setup lang="ts">
import backend from "@/data/backend";
</script>
