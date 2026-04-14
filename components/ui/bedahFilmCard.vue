<template>
  <div
    class="z-10 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-base md:text-2xl lg:text-4xl font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg mb-5"
  >
    <span class="w-7 h-7 rounded-full bg-red-500 animate-pulse"></span>
    Live Session - Bedah Film AI - Batch 1
  </div>
  <div
    class="relative lg:w-full max-w-7xl mx-auto rounded-[2.5rem] bg-white/85 backdrop-blur-xl p-6 md:p-8 flex flex-col gap-6 md:gap-8 border-4 animate-border-pulse"
  >
    <div class="flex flex-col md:flex-row gap-6 md:gap-10">
      <!-- Left side: Video -->
      <div class="w-full md:w-[55%] shrink-0">
        <div class="rounded-3xl overflow-hidden bg-black aspect-video relative shadow-lg">
          <client-only>
            <iframe
              src="https://www.youtube.com/embed/d9aEvxAFB4E?autoplay=1&mute=1&loop=1&playlist=d9aEvxAFB4E&controls=0&showinfo=0&rel=0"
              class="w-full h-full pointer-events-none"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </client-only>
        </div>
        <div
          class="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start flex-wrap text-center md:text-left mt-5"
        >
          <span class="font-black text-base text-gray-800">Pelaksanaan: 2 Mei 2026 - Online</span>

          <!-- Separator -->
          <div class="hidden md:block w-0.5 h-6 bg-gray-500"></div>

          <span class="italic font-bold text-base text-gray-800">Slot terbatas!</span>
        </div>
      </div>

      <!-- Right side: Content text -->
      <div class="w-full md:w-[45%] flex flex-col text-gray-900">
        <h2 class="text-2xl md:text-3xl font-black mb-2 text-gray-800">Webinar:</h2>
        <h3 class="text-lg font-bold leading-tight text-gray-800">
          Workflow - Produksi Film Pendek AI
        </h3>
        <h3 class="text-lg font-black leading-tight mb-4 uppercase text-gray-800">
          "HEIST THE HEIST"
        </h3>

        <div class="mb-4">
          <h4 class="font-bold text-base mb-2 text-gray-800">Yang akan dipelajari:</h4>
          <ul class="space-y-1.5">
            <li
              v-for="item in learned"
              :key="item"
              class="flex items-center gap-3 text-sm font-semibold text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="shrink-0">
                <circle cx="12" cy="12" r="9" stroke="#374151" stroke-width="2" />
                <circle cx="12" cy="12" r="4" fill="#374151" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-base mb-2 text-gray-800">Yang didapatkan:</h4>
          <ul class="space-y-1.5">
            <li
              v-for="item in obtained"
              :key="item"
              class="flex items-center gap-3 text-sm font-semibold text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="shrink-0">
                <circle cx="12" cy="12" r="9" stroke="#374151" stroke-width="2" />
                <circle cx="12" cy="12" r="4" fill="#374151" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <a
          href="#pricing"
          class="w-full md:w-auto px-8 py-3.5 bg-[#e52020] text-white font-black text-base text-center rounded-2xl hover:bg-red-700 transition-all shadow-[0_8px_15px_-5px_rgba(229,32,32,0.8)] active:scale-95 shrink-0 mt-5 block"
        >
          Booking sekarang!
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const learned = ["Filmmaking & Story", "Visual Thinking", "AI Production System", "Editing video"];

const obtained = ["Recording webinar", "Grup diskusi"];
</script>

<style scoped>
.animate-border-pulse {
  animation: border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes border-pulse {
  0%,
  100% {
    border-color: rgba(251, 239, 62, 1);
    box-shadow: 0 0 50px 0px rgba(251, 239, 62, 0.6);
  }
  50% {
    border-color: rgba(251, 239, 62, 0.3);
    box-shadow: 0 0 15px 0px rgba(251, 239, 62, 0.15);
  }
}
</style>
