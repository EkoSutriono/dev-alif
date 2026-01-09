<template>
  <section id="materi" class="bg-black py-24 text-white">
    <div class="container mx-auto px-4">
      <div class="bg-white/5 rounded-[2.5rem] border border-white/10 p-8 md:p-16">
        <h2 class="text-3xl md:text-5xl font-black text-center mb-16 text-white uppercase">
          Materi yang akan
          <span class="underline decoration-white decoration-4 underline-offset-8">dipelajari</span>
        </h2>

        <div class="flex flex-col lg:flex-row gap-16">
          <div class="w-full lg:w-5/12">
            <div
              class="sticky top-24 aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 font-bold overflow-hidden"
            >
              <div class="absolute inset-0 bg-linear-to-br from-white/5 to-black/5"></div>
              <span class="relative z-10">
                <iframe
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none min-w-full min-h-full w-[177.77vh] h-[56.25vw]"
                  :src="youtubeSrc"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                  style="min-width: 100%; min-height: 100%"
                ></iframe>
              </span>
            </div>
          </div>

          <div class="w-full lg:w-7/12">
            <div class="space-y-8">
              <div v-for="(chapter, idx) in chapters" :key="idx" class="group">
                <div class="flex items-center gap-6 mb-4">
                  <div
                    class="flex-none h-12 w-12 rounded-xl bg-white border border-white/10 flex items-center justify-center text-black font-bold"
                  >
                    {{ idx + 1 }}
                  </div>
                  <h4 class="text-xl font-bold uppercase tracking-wider">
                    {{ chapter.title }}
                  </h4>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pl-18">
                  <div
                    v-for="lesson in chapter.lessons"
                    :key="lesson"
                    class="h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[10px] text-gray-500 uppercase font-bold tracking-tighter text-center px-2"
                  >
                    {{ lesson }}
                  </div>
                </div>
              </div>
              <div class="border-t-2 border-dashed border-white w-full h-[2px]"></div>
              <div class="group">
                <div class="flex items-center gap-6 mb-4">
                  <div
                    class="flex-none h-12 w-12 rounded-xl bg-white border border-white/10 flex items-center justify-center text-black font-bold"
                  >
                    6
                  </div>
                  <h4 class="text-xl font-bold uppercase tracking-wider">BAB 6</h4>
                </div>
              </div>
              <div class="p-8 rounded-2xl bg-white text-black border border-white/10 shadow-2xl">
                <h5 class="font-black uppercase tracking-widest text-sm mb-2 opacity-60">
                  Special update materi dan teknik terbaru, secara terus menerus.
                </h5>
                <p class="font-bold text-lg mb-1">Khusus untuk Paket Ultimate</p>
                <p class="text-gray-600 text-sm">
                  Update modul setiap bulan mengikuti perkembangan AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

const chapters = [
  {
    title: "Bab 1: Memahami AI",
    lessons: ["Modul 1", "Modul 2", "Modul 3", "Modul 4", "Modul 5"],
  },
  {
    title: "Bab 2: Brand Understanding & Creative Concept",
    lessons: ["Modul 1", "Modul 2", "Modul 3", "Modul 4", "Modul 5", "Modul 6"],
  },
  {
    title: "Bab 3: Practice Prompting to Generating - Image & Video",
    lessons: [
      "Modul 1",
      "Modul 2",
      "Modul 3",
      "Modul 4",
      "Modul 5",
      "Modul 6",
      "Modul 7",
      "Modul 8",
    ],
  },
  {
    title: "Bab 4: Practice Prompting to Generating - Product",
    lessons: ["Modul 1", "Modul 2", "Modul 3", "Modul 4", "Modul 5", "Modul 6"],
  },
  {
    title: "Bab 5: Practice Prompting to Generating - Audio",
    lessons: ["Modul 1", "Modul 2", "Modul 3"],
  },
];
</script>
