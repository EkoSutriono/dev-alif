<template>
  <section class="bg-black py-24 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-5xl font-black text-center mb-24 uppercase tracking-tighter">
        Highlight
        <span class="underline decoration-white decoration-4 underline-offset-8">
          Beberapa Materi
        </span>
      </h2>

      <div class="space-y-32">
        <div
          v-for="(highlight, idx) in highlights"
          :key="idx"
          class="flex flex-col md:flex-row items-center gap-16"
          :class="{ 'md:flex-row-reverse': idx % 2 !== 0 }"
        >
          <div class="w-full lg:w-3/5">
            <div
              class="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black"
            >
              <iframe
                class="w-full h-full"
                :src="getYoutubeEmbed(highlight.video)"
                frameborder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="w-full md:w-2/5">
            <div class="text-white font-black mb-4 flex items-center gap-4">
              <span class="h-1.5 w-8 bg-white rounded-full"></span>
              0{{ idx + 1 }}
            </div>
            <h3 class="text-3xl font-black mb-6 uppercase">
              {{ highlight.title }}
            </h3>
            <p class="text-gray-400 text-lg leading-relaxed">
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

const getYoutubeEmbed = (url) => {
  if (!url) return null;

  const id = url.includes("youtu.be")
    ? url.split("youtu.be/")[1].split("?")[0]
    : url.includes("v=")
      ? url.split("v=")[1].split("&")[0]
      : null;

  if (!id) return null;

  return `https://www.youtube.com/embed/${id}?autoplay=0&mute=0&controls=1&rel=0&playsinline=1`;
};
</script>
