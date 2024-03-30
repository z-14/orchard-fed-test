<template>
  <div class="lg:h-screen sm:p-5  flex justify-center items-center">

  <div class="max-w-[1280px] ">
    <Hero/>
  </div>
</div>

</template>

<script setup lang="ts">
  import Hero from "./hero/Hero.vue"

  const { $anime } = useNuxtApp()

//   onMounted(() => {
//     $anime({ targets: '.title', translateX: -250,   easing: 'easeInOutSine'
// , direction: 'reverse', })
//   })
</script>