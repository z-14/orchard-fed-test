<template>
    <transition name="fade">
      <div v-if="show" class="fixed inset-0 z-50 overflow-auto bg-smoke-light flex" @click.self="$emit('close')">
        <div class="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
          <!-- Close button (X) on the top right -->
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button class="text-black text-2xl leading-none hover:text-gray-700" @click="$emit('close')">
              &times;
            </button>
          </div>
          <!-- Image display -->
          <NuxtImg :src="src" class="w-full h-full" />
        </div>
      </div>
    </transition>
  </template>
  
  
  <script  >
  import ImageModal from '../components/modal/ImageModal.vue';

  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      show: {
        type: Boolean,
        required: true
      }
    }
  };
  
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  .bg-smoke-light {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>