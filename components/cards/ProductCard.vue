<template>
  <NuxtLink 
  class="block transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-2xl mb-5">
    <div   class="w-full h-64 overflow-hidden border-b-4 border-red-700 duration-300 ease-in-out transform hover:scale-105 group-hover:bg-red-600 transition duration-300 ease-in-out cursor-pointer">
      <NuxtImg fit="cover" @click="openModal(product.image)" :src="product.image" :placeholder="[50, 75]" class="w-full h-full object-cover" />
    </div>
    <div class="py-4 bg-transparent p-2">
      <h3 class="lg:text-[18px] sm:text-[12px] md:text-[14px] mb-3 line-clamp-1 hover:line-clamp-none">
        {{ product.title }}
      </h3>
      <p class="font-light text-slate-300 sm:text-[10px] md:text-[12px] lg:text-[16px] hyphens-auto text-ellipsis overflow-hidden leading-relaxed line-clamp-3 mb-5 hover:line-clamp-none">
        {{ product.description }}
      </p>
      <button v-on:click="console.log(`Card : `,product.title)" class="inline-block relative text-lg font-medium group  cursor-pointer">
        Read more
        <span class="block h-1 w-full bg-red-700 group-hover:bg-red-600 transition duration-300 ease-in-out"></span>
      </button>
    </div>

    <ImageModal :src="modalImage" :show="showModal" @close="showModal = false" />

  </NuxtLink>
</template>


<script setup>

import ImageModal from '../components/modal/ImageModal.vue';


const showModal = ref(false);
const modalImage = ref('');

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});



function openModal(imageSrc) {
  modalImage.value = imageSrc;
  showModal.value = true;
}
</script>

<style lang="scss" scoped></style>
