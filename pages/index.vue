<template>
  <div class="container mx-auto">
    <AppBanner />
    <div class="text-center px-8">
      <p class="
          font-general-semibold
          text-2xl
          sm:text-4xl
          font-semibold
          mb-12
          mt-10
          sm:mt-16
          text-ternary-dark
          dark:text-ternary-light
        ">
        Your Dog Images 🐶
      </p>
      <div>
        <ImageGrid :images="dogs" :value="value" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
import ImageGrid from "../components/projects/ImageGrid.vue";
export default {
  scrollToTop: true,
  data: () => {
    return {
      dogs: [],
      value: 1,
    };
  },
  async fetch() {
    await axios
      .get(
        `http://shibe.online/api/shibes?count=14`
      )
      .then((data) => {
        this.dogs = data.data;
      });
  },
  components: { AppBanner, Button, ImageGrid },
};
</script>

<style lang="scss" scoped>
</style>
