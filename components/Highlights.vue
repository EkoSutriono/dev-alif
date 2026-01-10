<template>
  <section class="bg-black py-2 md:py-24 text-white">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl md:text-5xl font-black text-center md:mb-24 mb-16 uppercase tracking-tighter"
      >
        Highlight
        <span class="decoration-white decoration-4">Beberapa Materi</span>
      </h2>

      <div class="space-y-8">
        <div
          v-for="(highlight, idx) in highlights"
          :key="idx"
          v-animate.once
          class="fade-up-reveal flex flex-col md:flex-row items-center gap-12 lg:gap-16 border-2 rounded-2xl md:p-8 p-4 border-white"
          :class="{ 'md:flex-row-reverse': idx % 2 !== 0 }"
        >
          <div class="w-full md:w-1/2 lg:w-3/5">
            <div class="relative aspect-video rounded-3xl overflow-hidden bg-black group">
              <VideoPlayer
                :url="highlight.video"
                class="w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-2/5">
            <div class="text-white font-black mb-4 flex items-center gap-4">
              <span class="h-1.5 w-8 bg-white rounded-full"></span>
              0{{ idx + 1 }}
            </div>
            <h3 class="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
              {{ highlight.title }}
            </h3>
            <p class="text-gray-400 text-base md:text-lg leading-relaxed">
              {{ highlight.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    title: "Shotlist & Camera Movement",
    description:
      "Di modul ini kamu akan belajar cara merancang shotlist yang rapi dan sinematik, serta memilih camera movement yang tepat agar video AI terasa hidup, dinamis, dan bercerita. Mulai dari penentuan jenis shot, ritme pergerakan kamera, hingga penerapannya ke prompt AI untuk menghasilkan visual yang lebih profesional dan konsisten.",
    video: "https://youtu.be/7Fp3jLSKKtw",
  },
  {
    title: "Visual Effect",
    description:
      "Modul ini membahas cara menggunakan dan mengontrol visual effect agar video AI terlihat lebih dramatis, realistis, dan berkelas. Kamu akan belajar mengintegrasikan visual effect ke dalam prompt dan storytelling supaya hasil akhir tetap sinematik dan profesional.",
    video: "https://youtu.be/Aio31QYrmRc",
  },
  {
    title: "Desain Poster Produk Profesional",
    description:
      "Di modul ini kamu akan belajar cara merancang poster produk yang kuat secara visual dan strategis dengan prompt. Mulai dari penataan layout, pemilihan warna & tipografi, hingga mengoptimalkan visual hasil AI agar poster terlihat profesional, menarik, dan siap dipakai untuk kebutuhan branding maupun promosi.",
    video: "https://youtu.be/83LC6HyTQ_U",
  },
  {
    title: "Video Animasi Produk",
    description:
      "Modul ini mengajarkan cara mengubah visual produk menjadi video animasi yang menarik dan bernilai jual. Kamu akan belajar membangun gerakan dan ritme visual yang tepat menggunakan AI agar produk terlihat lebih hidup, modern, dan profesional untuk kebutuhan iklan maupun branding.",
    video: "https://youtu.be/7n7gBfI9uao",
  },
];
</script>
