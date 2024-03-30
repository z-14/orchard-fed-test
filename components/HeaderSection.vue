<template>
  <div class="h-screen  flex justify-center items-center">

    <div class="max-w-[1280px] ">

<div class=" grid grid-cols-1 sm:grid-cols-1   md:grid-cols-3 ls:grid-cols-3  ">
<div class="max-w-sm w-full lg:max-w-full lg:flex ">
  <div>
  <NuxtImg fit="cover" src="/component-01/Image-01@2x.jpg" :placeholder="[50, 25]" sizes="100vw sm:384px md:400px"  />
</div>
</div>
<div class="grid grid-row-2 sm:grid-cols-1">
  <div class="grid grid-rows-2 gap-y-5">
  <div class="row-span-1 ">
    <NuxtImg fit="cover"  src="/component-01/Image-02@2x.jpg"    />
  </div>
  <div class="row-span-1 ">
    <NuxtImg fit="cover" src="/component-01/Image-03@2x.jpg"   />
  </div>
</div>
</div>


<div class="  ">

<div class=" flex flex-col justify-between leading-normal">
 <div class="mb-8 font-sans">
   <h2 class="text-white font-bold  text-[24px] mb-1 text-ellipsis overflow-hidden border-b border-gray-400">Answer Your body's needs </h2>
   <p class="font-light text-white text-[18px] hyphens-auto text-ellipsis overflow-hidden leading-relaxed "> The way ingredients are sourced affects the
way we nourish our bodies. Author Mark
Schatzer believes our body naturally devolops
an appetite for the foods and nutrients it needs
to be healthy, but that artificial flavourings are
getting in the way. This can be reversed by
focusing on high-quality ingredients and being
mindful as your appetite guides you to
consume according to your body's needs.
</p>

 </div>
 <div class="flex items-center">
   <!-- <img class="w-10 h-10 rounded-full mr-4" src="http://api.doormate.space/file/y3oEzW7vRNbv2Xow7tCrWxiuDipBrpi5gXHadzHcwYs2xSWAnGm0c2mUlLxI/andrea-davis-mt_PXjyNOeo-unsplash.jpg" alt="Avatar of Jonathan Reinink"> -->
   <div class="text-sm">
    <h3 class="">
  BE MINDFUL
</h3>

<p class="text-[18px]">
  Sourcing local or organic food is a good way
to start being more mindful about what
you're cooking and eating.
</p>

   </div>
 </div>
</div>
</div>

</div>




</div>
</div>

</template>
<script setup lang="ts">
// Your TypeScript script here
</script>