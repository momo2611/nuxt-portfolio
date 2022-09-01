<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <section class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-10
      sm:mt-8
    ">
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <!-- <h1 class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        ">
        Hi, I'm Mo Mo
      </h1> -->
      <h1 class="
                font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
hello-text
        ">
        Hi, I'm Mo Mo
      </h1>
      <p class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        ">
        A Self-Taught Nuxt & VueJS
      </p>
      <p class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        ">
        And I love music.
      </p>
      <p class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        ">
        Also 🐱 and 🐶.
      </p>
      <div class="mt-6">
        <iframe style="border-radius: 8px"
          src="https://open.spotify.com/embed/track/0U8QSYMw4xJTNM8IaP6PnD?utm_source=generator"
          class="hidden md:block md:w-full" height="80" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img v-if="this.$colorMode.value == 'dark'" src="~/static/developer-dark.svg" alt="Developer Dark" />
      <img v-else src="~/static/developer.svg" alt="Developer Light" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hello-text {
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: text-shadow 1s;

  &:hover {
    text-shadow: 0.04em 0.04em #fc0049, 0.08em 0.08em #fe8f01,
      0.12em 0.12em #fdf21f, 0.16em 0.16em #3fdf4b, 0.2em 0.2em #3462fe;
  }
}
</style>
