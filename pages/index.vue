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


const title = 'Orchard Fed Test';
const description = 'My amazing site.';


useHead({
  title,
  meta: [
    { name: 'description', content: description }
  ],
 
});


</script>
