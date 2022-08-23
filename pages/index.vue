<template>
  <div class="container mx-auto">
    <AppBanner />
    <div class="text-center">
      <p
        class="
          font-general-semibold
          text-2xl
          sm:text-4xl
          font-semibold
          mb-2
          mt-10
          sm:mt-16
          text-ternary-dark
          dark:text-ternary-light
        "
      >
        Title go here
      </p>
    </div>
  </div>
</template>

<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,

  components: { AppBanner, Button },
};
</script>

<style lang="scss" scoped>
</style>
