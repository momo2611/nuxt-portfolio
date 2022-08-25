<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p class="
            font-general-medium
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-14
            sm:mt-20
            mb-7
          ">
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
            <span class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              ">{{ project.publishDate }}</span>
          </div>
          <div class="flex items-center">
            <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
            <span class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              ">{{ project.tag }}</span>
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div class="mb-10 sm:mb-0" v-for="projectImage in project.projectImages" :key="projectImage.id">
          <img :src="projectImage.img" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left overflow-hidden">
          <!-- Single project client details -->
          <div class="mb-7">
            <p class="
                font-general-medium
                text-2xl text-secondary-dark
                dark:text-secondary-light
                mb-2
              ">
              {{ project.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li v-for="info in project.companyInfos" :key="info.id" class="
                  font-general-regular
                  text-ternary-dark
                  dark:text-ternary-light
                ">
                <span>{{ info.title }}: </span>
                <a href="#" :class="
                  info.title == 'Website' || info.title == 'Phone'
                    ? 'hover:underline cursor-pointer'
                    : ''
                " aria-label="Project website and phone">{{ info.details || "None" }}</a>
              </li>
            </ul>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              ">
              {{ project.objectivesTitle }}
            </p>
            <p class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              ">
              {{ project.objectivesDetails }}
            </p>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              ">
              {{ project.techTitle }}
            </p>
            <p class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              ">
              {{ project.technologies.join(", ") }}
            </p>
          </div>

          <!-- Single project social sharing -->
          <div>
            <p class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              ">
              Web source
            </p>
            <ul class="leading-loose">
              <!-- demo -->
              <li v-for="link in project.links" :key="link.id" class="
                  font-general-regular
                  text-ternary-dark
                  dark:text-ternary-light
                ">
                <div>
                  <span>Demo: </span>
                  <a :href="link.demo || '#'" class="w-full hover:underline cursor-pointer text-blue-600"
                    target="_blank">{{
                        link.demo || "Unavailable"
                    }}</a>
                </div>
                <div>
                  <span>Source code: </span>
                  <a :href="link.source || '#'" class="w-full hover:underline cursor-pointer text-blue-600"
                    target="_blank">{{
                        link.source || "Unavailable"
                    }}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- cat image -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p class="
              font-general-medium
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            ">
            I don't have idea for this section, so 😁
          </p>
          <ImageGrid :images="cats" :value="value" />
        </div>
      </div>
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import feather from "feather-icons";
import ImageGrid from "../../components/projects/ImageGrid.vue";
export default {
  scrollToTop: true,

  data: () => {
    return {
      cats: [],
      value: 2
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
    ...mapState(["socialSharings"]),
  },

  async fetch() {
    await axios
      .get(
        `https://api.thecatapi.com/v1/images/search?format=json&limit=12&api_key=${process.env.CAT_API_KEY}`
      )
      .then((data) => {
        this.cats = data.data;
      });
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  components: { ImageGrid }
};
</script>

<style lang="scss" scoped>
</style>
