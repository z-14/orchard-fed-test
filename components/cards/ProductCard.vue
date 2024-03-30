<template>
  <NuxtLink :to="'/listings/' + blog.id">
    <img
      :src="blog.photos[0]"
      class="w-full h-64 object-cover rounded-br-xl drop-shadow-lg"
    />
    <div class="py-4 bg-transparent">
      <h3 class="text-sm font-semibold text-gray-800 mb-2">
        {{ blog?.title }}
      </h3>
      <div class="text-sm text-gray-500 mb-2 flex">
        <p v-if="blog?.description">
          {{ blog?.description }},
        </p>
  
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  blog: {
    type: Object, // Define the type of the prop as an object
    required: true, // Indicate that the blog prop is required
  },
});
</script>

<style lang="scss" scoped></style>
