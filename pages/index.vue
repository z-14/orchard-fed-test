<template>
 <div class="container mx-auto">
    <div class="grid place-items-center ">
      <HeaderSection/>
      <ListSection/>
    </div>

  </div>
</template>




<script setup lang="ts">


import HeaderSection from '../components/HeaderSection.vue';
import ListSection from '../components/ListSection.vue';
import { useHead } from '@unhead/vue'


const title = 'All the Latest from AEG - Elevate Your Cooking Experience';
const description = `Explore AEG's latest culinary insights with Summer Lunch Menus by Mark Best, festive cooking tips, and exclusive cookbooks designed to enhance your cooking experience. Embrace mindful eating with high-quality, locally-sourced organic foods for healthier living and exceptional at-home entertaining.`;


useHead({
  title,
  meta: [
    { name: 'description', content: description }
  ],
 
});


</script>
