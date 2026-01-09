<template>
  <section id="materi" v-animate class="bg-black py-24 text-white fade-in-reveal">
    <div class="container mx-auto px-4">
      <div class="bg-white/5 rounded-[2.5rem] border border-white/10 p-8 md:p-16">
        <h2
          v-animate
          class="text-3xl md:text-5xl font-black text-center mb-16 text-white uppercase fade-up-reveal"
        >
          Materi yang akan
          <span class="decoration-white decoration-4">dipelajari</span>
        </h2>

        <div class="flex flex-col lg:flex-row gap-16">
          <div v-animate class="w-full lg:w-5/12 scale-in-reveal">
            <div
              class="sticky top-24 aspect-square rounded-3xl bg-black border border-white/10 overflow-hidden"
            >
              <video
                autoplay
                muted
                loop
                playsinline
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none min-w-full min-h-full object-cover"
              >
                <source src="/video/intro-lp.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div v-animate.stagger class="w-full lg:w-7/12">
            <div class="space-y-8">
              <div v-for="(chapter, idx) in chapters" :key="idx" class="group animate-item">
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
                  <h4 class="text-xl font-bold uppercase tracking-wider">Special Bab</h4>
                </div>
              </div>
              <div class="p-8 rounded-2xl bg-white text-black border border-white/10 shadow-2xl">
                <h5 class="font-bold text-sm mb-2 opacity-60">
                  Special update materi dan teknik terbaru, secara terus menerus.
                </h5>
                <p class="text-lg mb-1 font-bold">Khusus untuk Paket Ultimate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
