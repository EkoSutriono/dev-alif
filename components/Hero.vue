<template>
  <section
    data-aos="fade"
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-40 md:pt-30 md:pb-48"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- <client-only>
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none min-w-full min-h-full object-cover"
        >
          <source :src="heroVideo" type="video/mp4" />
        </video>
      </client-only> -->
      <client-only>
        <iframe
          src="https://www.youtube.com/embed/d9aEvxAFB4E?autoplay=1&mute=1&loop=1&playlist=d9aEvxAFB4E&controls=0&showinfo=0&rel=0"
          class="w-full h-full pointer-events-none blur-sm scale-150"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </client-only>
      <div class="absolute inset-0 bg-black/60 z-10"></div>
    </div>

    <UiBedahFilmCard />

    <div class="relative z-10 mx-auto max-w-5xl text-center mt-10">
      <div class="xl:max-w-5xl lg:max-w-3xl md:max-w-xl max-w-xs h-1 bg-white my-8 mx-auto"></div>

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

      <div
        class="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-4 w-full px-4 mx-auto max-w-6xl mt-8"
      >
        <!-- Bagian Kiri -->
        <div class="flex flex-col justify-center text-center md:text-left w-full md:w-[45%]">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            class="mb-4 md:mb-6 font-black leading-[1.1] tracking-tight text-white text-4xl lg:text-6xl uppercase"
          >
            Masterclass
          </span>

          <span
            data-aos="fade-up"
            data-aos-delay="400"
            class="text-white font-black flex items-center justify-center md:justify-start gap-4 text-xl md:text-2xl lg:text-3xl uppercase leading-snug"
          >
            Produksi Video Iklan Profesional Pakai AI
          </span>
        </div>

        <!-- Pemisah -->
        <div class="hidden md:flex items-center justify-center w-[10%] shrink-0">
          <div class="w-1 h-full min-h-[120px] max-h-[200px] bg-white/30 rounded-full"></div>
        </div>

        <!-- Bagian Kanan -->
        <div class="flex flex-col justify-center text-center md:text-left w-full md:w-[45%]">
          <p class="mx-auto md:mx-0 max-w-lg text-base leading-relaxed text-gray-200">
            Kuasai teknik produksi video profesional dengan teknologi AI. Dirancang khusus dengan
            pendekatan praktis dan terstruktur.
          </p>
          <div
            class="flex items-center justify-center md:justify-start mt-8 gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm w-fit mx-auto md:mx-0 shadow-xl"
          >
            <span>Telah dipelajari oleh 1000+ orang</span>
            <Avatar class="scale-90 origin-right md:origin-left" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="relative z-10 mx-auto max-w-5xl text-center mt-10">
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
    </div> -->

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
