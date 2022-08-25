<script>
export default {
  props: ["contacts"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- Contact details -->
  <div class="w-full md:w-1/2 px-6 sm:px-0">
    <div class="text-left max-w-xl mb-8">
      <h2 class="
          font-general-medium
          text-2xl text-primary-dark
          dark:text-primary-light mt-2
          mb-4
        ">
        Contact details
      </h2>
      <ul class="font-general-regular">
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <i :data-feather="contact.icon" class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i>
          <a href="#" class="text-lg mb-2 text-ternary-dark dark:text-ternary-light" :class="
            contact.icon === 'mail' || contact.icon === 'phone'
              ? 'hover:underline cursor-pointer'
              : ''
          " aria-label="Website and Phone">
            {{ contact.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="w-full mb-4 sm:mb-6">
      <iframe class="rounded-md w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59893.25985342002!2d105.94043195894943!3d20.245196505096676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313670ab6f10c8c1%3A0x888a79884edbe5cc!2zVHAuIE5pbmggQsOsbmgsIE5pbmggQsOsbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1661326531017!5m2!1svi!2s"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
