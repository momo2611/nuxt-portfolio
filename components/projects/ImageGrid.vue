<template>
    <div class="w-full h-auto grid grid-cols-three gap-3 grid-flow-dense">
        <div v-for="image in images" :key="image.id"
            class="relative overflow-hidden bg-no-repeat hover:shadow-md bg-cover rounded-md w-auto h-auto img-animal">
            <img class="w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
                :src="value == 1 ? image : image.url" alt="Image" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.img-animal {
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
