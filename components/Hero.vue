<template>
  <section
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-40 md:pt-30 md:pb-48"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <iframe
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none min-w-full min-h-full w-[177.77vh] h-[56.25vw]"
        :src="youtubeSrc"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="min-width: 100%; min-height: 100%"
      ></iframe>
      <div class="absolute inset-0 bg-black/60 z-10"></div>
    </div>
    <div class="relative z-10 mx-auto max-w-5xl text-center">
      <div
        class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm md:text-sm"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
          ></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>
        Alif Maluf
      </div>

      <h1
        class="mb-8 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
      >
        Masterclass
        <br />
        Produksi Video Iklan Profesional Pakai AI
      </h1>

      <p class="mx-auto max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg md:text-xl">
        Kuasai teknik produksi video profesional dengan teknologi AI. Dirancang khusus dengan
        pendekatan praktis dan terstruktur.
      </p>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/5 blur-[120px] pointer-events-none"
    ></div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const VIDEO_ID = "exahZ12Mj4g";

const youtubeSrc = computed(
  () =>
    `https://www.youtube.com/embed/${VIDEO_ID}?` +
    `autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}` +
    `&modestbranding=1&showinfo=0&rel=0&playsinline=1`
);
</script>

<style scoped></style>
