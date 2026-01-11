<template>
  <section
    id="about"
    class="relative -mt-20 overflow-hidden rounded-t-[60px] bg-linear-to-b from-black via-black/20 to-white md:py-24 py-4"
  >
    <div class="container mx-auto px-4 relative z-10">
      <AboutBio />
      <AboutVideoResults />
    </div>

    <div class="px-4">
      <AboutClients />
    </div>
  </section>
</template>

<script setup>
import AboutBio from "./about/AboutBio.vue";
import AboutVideoResults from "./about/AboutVideoResults.vue";
import AboutClients from "./about/AboutClients.vue";
</script>

<style scoped>
/* Main section styles if any */
</style>
