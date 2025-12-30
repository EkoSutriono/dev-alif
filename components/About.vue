<template>
  <section
    id="about"
    class="relative -mt-20 overflow-hidden rounded-t-[60px] bg-white py-24 text-black"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 mb-32">
        <div class="w-full md:w-1/2 h-[400px] bg-gray-300 rounded-2xl flex justify-center">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-black/5 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
            ></div>
            <div
              class="relative w-full max-w-sm aspect-3/4 rounded-3xl bg-black/5 overflow-hidden border border-black/10"
            >
              <div
                class="absolute inset-0 flex items-center justify-center text-gray-400 font-bold"
              >
                Foto Alif
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-4xl font-black mb-6 tracking-tight">
            Bio Singkat
            <span class="text-black decoration-black underline decoration-4 underline-offset-8">
              Alif Ma'luf
            </span>
          </h2>
          <div class="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Seorang visioner di balik The Amazing Alif, dengan dedikasinya bertahun-tahun dalam
              mengeksplorasi batas kreativitas digital dan kecerdasan buatan.
            </p>
            <p>
              Alif telah membantu ratusan kreator untuk mentransformasi cara mereka bercerita
              melalui media visual yang didukung oleh teknologi AI terbaru.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-32">
        <h3 class="text-center text-2xl font-bold mb-12 uppercase tracking-[0.2em] text-black">
          Hasil Beberapa Video AI
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div
            v-for="i in 5"
            :key="i"
            class="aspect-9/16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-black/10 group-hover:text-black/30 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <p class="text-center text-gray-400 font-medium mb-8 uppercase tracking-widest text-sm">
          Klien yang telah bekerja sama
        </p>
        <div class="relative overflow-hidden">
          <div
            class="flex space-x-12 animate-marquee whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-all duration-500 py-4"
          >
            <div
              v-for="i in 12"
              :key="i"
              class="inline-flex h-8 w-32 shrink-0 bg-black/10 rounded-lg"
            ></div>
            <div
              v-for="i in 12"
              :key="'dup-' + i"
              class="inline-flex h-8 w-32 shrink-0 bg-black/10 rounded-lg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
  display: inline-flex;
  width: max-content;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover if you want */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
