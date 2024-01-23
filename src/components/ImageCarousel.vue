<template>
  <div class="mt-5">
    <div :key="currentImage" class="flex justify-center">
      <img :src="images[currentImage] === null ? undefined : images[currentImage]" :alt="'Image ' + (currentImage + 1)"
        class="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-xl shadow-lg dark:shadow-neutral-800 shadow-neutral-300" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      currentImage: 0,
    };
  },
  mounted() {
    this.imageInterval = setInterval(this.nextImage, Math.floor(Math.random() * 1000) + 5000)
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
  },
};
</script>
