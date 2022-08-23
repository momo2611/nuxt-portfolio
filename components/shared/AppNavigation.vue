<script>
export default {
  props: ["isOpen", "showModal", "modal", "categories"],
};
</script>

<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
  >
    <NuxtLink
      to="/projects"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
      "
      aria-label="Projects"
      >Projects</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="About Me"
      >About Me</NuxtLink
    >
    <NuxtLink
      to="/contact"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="Contact"
      >Contact</NuxtLink
    >
    <div
      class="
        font-general-regular
        border-t-2
        pt-3
        sm:pt-0 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
    >
      <a
        href="/Stoman-Resume.pdf"
        download=""
        class="
          sm:hidden
          flex
          justify-center
          items-center
          w-32
          sm:w-44 sm:mb-0
          text-lg
          border border-indigo-200
          dark:border-ternary-dark
          py-1
          sm:py-2
          shadow-md
          rounded-lg
          bg-indigo-50
          focus:ring-1 focus:ring-indigo-900
          hover:bg-indigo-500
          text-gray-500
          hover:text-white
          duration-500
        "
        aria-label="Download Resume"
      >
        <i
          data-feather="arrow-down-circle"
          class="mr-1.5 sm:mr-2.5 w-4 sm:w-5 duration-100"
        ></i>
        <span class="text-xs sm:text-sm font-general-medium duration-100"
          >Download CV</span
        ></a
      >
    </div>
  </div>
</template>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
}
</style>
