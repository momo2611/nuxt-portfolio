<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutMe"]),
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/static/ayaaka.jpg" class="rounded-full w-96 shadow-lg" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full flex flex-col justify-center sm:w-3/4 text-left">
      <p v-for="bio in aboutMe" :key="bio.id" class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        ">
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
