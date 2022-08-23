<template>
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p class="
              font-general-medium
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            ">
            I don't have idea for this section, so 🐱
        </p>
        <div class="w-full h-auto grid grid-cols-three gap-3 grid-flow-dense">
            <div v-for="cat in cats" :key="cat.id" class="w-auto h-auto img-cat">
                <img class="
                  w-full
                  h-full
                  rounded-md
                  shadow-lg
                  object-cover
                " :src="cat.url" alt="Cat image" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => {
        return {
            cats: [],
        };
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
}
</script>

<style lang="scss" scoped>
.img-cat {
    &:first-child {
        grid-column-start: span 2;
        grid-row-start: span 2;
    }

    &:nth-child(2n + 3) {
        grid-row-start: span 2;
    }

    &:nth-child(4n + 3) {
        grid-row-start: span 2;
        grid-column-start: span 2;
    }

    &:nth-child(6n + 7) {
        grid-row-start: span 2;
    }
}
</style>