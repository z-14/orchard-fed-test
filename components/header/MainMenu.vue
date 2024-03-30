<template>
    <!-- Menu Start -->
    <div class="px-8 hidden lg:block">
        <nav>
            <ul class="flex">
                <!-- <NuxtLink 
                to="/" 
                :class="{ 'before:opacity-100': isHomeActive }"
                class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="/" class="text-white uppercase font-bold font-exo relative">Home</NuxtLink>
                </NuxtLink>
           
               -->
            </ul>
        </nav>
    </div>
    <!-- Menu End -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isHomeActive = computed(() => route.path === '/');
const isGameActive = computed(() => route.path.startsWith('/game'));
// Add more computed properties as needed for other routes
</script>
