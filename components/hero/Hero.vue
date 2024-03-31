<template>
    <div class=" grid grid-cols-1 sm:grid-cols-1   md:grid-cols-3 ls:grid-cols-4 gap-5 p-10">
<div class=" w-full duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
  <NuxtImg  @click="openModal(product.image[0])"  fit="cover" :src="product.image[0]" :placeholder="[50, 75]" class="h-full w-full object-cover "  />
</div>
<div class="grid grid-row-2 sm:grid-cols-1">
  <div class="grid grid-rows-2 gap-y-5">
  <div  class="row-span-1 duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <NuxtImg @click="openModal(product.image[1])" fit="cover"  :src="product.image[1]" :placeholder="[50, 25]" class="h-full w-full object-cover"  />
  </div>
  <div  class="row-span-1 duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <NuxtImg @click="openModal(product.image[2])" fit="cover" :src="product.image[2]" :placeholder="[50, 25]" class="h-full w-full object-cover"  />
  </div>
</div>
</div>

<div class=" grid-col-2 ">

<div class=" flex flex-col justify-between leading-normal">
 <div class="mb-8 font-sans">
   <h1 class="title font-light text-slate-200 md:text-[14px] lg:text-[28px] sm:text-[14px] mb-6 pb-3 text-ellipsis overflow-hidden border-b border-gray-400 uppercase line-clamp-1  ">{{ product.title }}</h1>
   <p class="font-light text-slate-300 sm:text-[12px] md:text-[14px] lg:text-[18px] hyphens-auto text-ellipsis overflow-hidden leading-relaxed line-clamp-9  "> 
    {{ product.description }}
</p>

 </div>
 <div class="flex items-center">
   <!-- <img class="w-10 h-10 rounded-full mr-4" src="http://api.doormate.space/file/y3oEzW7vRNbv2Xow7tCrWxiuDipBrpi5gXHadzHcwYs2xSWAnGm0c2mUlLxI/andrea-davis-mt_PXjyNOeo-unsplash.jpg" alt="Avatar of Jonathan Reinink"> -->
   <div class="font-sans">
<h3 class="font-sans font-bold uppercase text-red-800  mb-5">
  Be mindful
</h3>

<p class="lg:text-[18px] sm:text-[12px] md:text-[14px] ">
Sourcing local or organic food is a good way
to start being more mindful about what
you're cooking and eating.
</p>

   </div>
 </div>
</div>
</div>
<ImageModal :src="modalImage" :show="showModal" @close="showModal = false" />

</div>
</template>

<script setup lang="ts">
import ImageModal from '../modal/ImageModal.vue';

const product = 
{
    id: 1,
    image: ['/component-01/Image-01@2x.jpg','/component-01/Image-02@2x.jpg','/component-01/Image-03@2x.jpg'],
    description: `The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.`,
    title:`Answer Your body's needs`,
  }
 
;


const showModal = ref(false);
const modalImage = ref('');




function openModal(imageSrc:any) {
  modalImage.value = imageSrc;
  showModal.value = true;
}
</script>