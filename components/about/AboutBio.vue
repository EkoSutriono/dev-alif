<template>
  <div class="flex flex-col md:flex-row items-center md:gap-12 gap-6 md:mb-32 mb-16 px-4">
    <div
      data-aos="fade-right"
      class="w-full md:w-1/2 md:h-[400px] h-[200px] rounded-2xl relative overflow-hidden flex justify-center items-center bg-black/20"
    >
      <NuxtImg
        src="https://cdn.qiblat.my.id/alif.gif"
        class="absolute w-auto h-[90%] object-contain rounded-2xl transition-opacity duration-300 ease-in-out"
        alt="Alif Ma'luf Bio Visual"
        format="gif"
        loading="eager"
        fetchpriority="high"
      />
    </div>

    <div data-aos="fade-left" class="w-full md:w-1/2 text-white">
      <h2 class="text-4xl font-black mb-6 tracking-tight">
        Bio Singkat
        <span>Alif Ma'luf</span>
      </h2>

      <div class="space-y-4 text-gray-300 md:text-lg text-sm leading-relaxed">
        <p>
          Professional AI-Driven Commercial Video Creator yang berfokus pada pembuatan video iklan
          dan campaign visual berbasis AI.
        </p>
        <p>
          Melalui Masterclass ini, aku membagikan workflow nyata, mindset kreatif, dan strategi
          storytelling.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
