<template>
  <NuxtLink class="block transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl">
    <div class="w-full h-64 overflow-hidden border-b-4 border-red-700">
      <NuxtImg fit="cover" :src="product.image" :placeholder="[50, 75]" class="w-full object-cover" />
    </div>
    <div class="py-4 bg-transparent ">
      <h3 class="lg:text-[18px] sm:text-[12px] md:text-[14px] mb-3 line-clamp-1">
        {{ product.title }}
      </h3>
      <p class="font-light text-slate-300 sm:text-[10px] md:text-[12px] lg:text-[16px] hyphens-auto text-ellipsis overflow-hidden leading-relaxed line-clamp-3 mb-5">
        {{ product.description }}
      </p>
      <div class="inline-block relative text-lg font-medium group pointer">
        Read more
        <span class="block h-1 w-full bg-red-700 group-hover:bg-red-600 transition duration-300 ease-in-out"></span>
      </div>
    </div>
  </NuxtLink>
</template>


<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});


</script>

<style lang="scss" scoped></style>
