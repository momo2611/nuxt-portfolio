<script>
import feather from "feather-icons";
import Timeline from "../components/about/Timeline.vue";

export default {
  name: "About",
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  components: { Timeline },
};
</script>

<template>
  <div>
    <AboutMe class="container mx-auto" />

    <div
      class="
        flex flex-wrap
        mx-5
        sm:mx-0
        gap-x-3 gap-y-4
        sm:gap-y-0
        flex-row
        justify-center
        items-center
        mt-8
      "
    >
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=momo2611&langs_count=8&layout=compact&theme=dracula"
        />
      </div>
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=momo2611&show_icons=true&theme=dracula"
        />
      </div>
    </div>

    <div class="text-center">
      <p
        class="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
          mt-10
          sm:mt-16
          text-ternary-dark
          dark:text-ternary-light
        "
      >
        Timeline
      </p>
    </div>

    <Timeline class="container mx-auto" />
  </div>
</template>

<style scoped></style>
