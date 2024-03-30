<template>
    <div class="sm:p-5 flex justify-center items-center">
      <div class="items-center">
        <h2 class="w-full p-10 text-5xl font-sans font-light uppercase text-center">All the Latest from AEG</h2>
        <div class="max-w-[1280px]">
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ls:grid-cols-4 gap-5 p-10">
            <div class="w-full" v-for="product in products" :key="product.id">
              <ProductCard :product="product"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <script setup lang="ts">

const products = [
{
    id: 1,
    image: '/component-02/Image-01@2x.jpg',

    title: 'Summer Lunch Menu By Mark Best',
    description: 'AEG ambassador Mark Best’s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
  },
  {
    id: 2,
    image: '/component-02/Image-02@2x.jpg',

    title: 'A Traditional Christmas Eve, Mark Best Style',
    description: 'One of Australia\'s best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.',
  },
  {
    id: 3,
    image: '/component-02/Image-03@2x.jpg',

    title: 'Taking Taste Further',
    description: 'This exclusive cookbook gives you all the know-how you need. We’ve designed it to make sure you get the most out of our products – and the best out of your food.',
  },
];



  import ProductCard from './cards/ProductCard.vue';
  </script>
  