<template>
  <section
    data-aos="fade"
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-40 md:pt-30 md:pb-48"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <client-only>
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none min-w-full min-h-full object-cover"
        >
          <source :src="heroVideo" type="video/mp4" />
        </video>
      </client-only>
      <div class="absolute inset-0 bg-black/60 z-10"></div>
    </div>
    <div class="relative z-10 mx-auto max-w-5xl text-center">
      <a href="#pricing">
        <div
          class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm md:text-sm"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
            ></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
          Pelajari Sekarang!
        </div>
      </a>

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="mb-8 font-black leading-[1.1] tracking-tight text-white text-4xl md:text-6xl lg:text-8xl uppercase"
      >
        Masterclass
      </h1>

      <span
        data-aos="fade-up"
        data-aos-delay="400"
        class="text-white font-black mb-4 flex items-center gap-4 text-[24px] md:text-[34px] lg:text-[38px] uppercase"
      >
        Produksi Video Iklan Profesional Pakai AI
      </span>

      <p
        class="mx-auto max-w-2xl px-4 text-base leading-relaxed text-gray-100 sm:text-lg md:text-xl"
      >
        Kuasai teknik produksi video profesional dengan teknologi AI. Dirancang khusus dengan
        pendekatan praktis dan terstruktur.
      </p>
      <div
        class="flex items-center justify-center mt-20 gap-4 mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm md:text-sm w-fit mx-auto"
      >
        <span>Telah dipelajari oleh 1000+ orang</span>
        <Avatar />
      </div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/5 blur-[120px] pointer-events-none"
    ></div>
  </section>
</template>

<script setup>
import Avatar from "./ui/avatar.vue";

const heroVideo = "https://cdn.qiblat.my.id/intro-lp-hero.mp4";
</script>

<style scoped></style>
