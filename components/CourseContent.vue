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
              <span class="relative z-10">Video Preview Materi</span>
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
              <div
                class="mt-16 p-8 rounded-2xl bg-white text-black border border-white/10 shadow-2xl"
              >
                <h5 class="font-black uppercase tracking-widest text-sm mb-2 opacity-60">
                  Special Update Materi
                </h5>
                <p class="font-bold text-lg mb-1">Let's grow your skills together!</p>
                <p class="text-gray-600 text-sm">
                  Update modul setiap bulan mengikuti perkembangan AI terkini.
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
const chapters = [
  {
    title: "Bab 1",
    lessons: ["Materi 1", "Materi 2", "Materi 3", "Materi 4"],
  },
  {
    title: "Bab 2",
    lessons: ["Materi 1", "Materi 2", "Materi 3", "Materi 4"],
  },
  {
    title: "Bab 3",
    lessons: ["Materi 1", "Materi 2", "Materi 3", "Materi 4", "Materi 5", "Materi 6"],
  },
  {
    title: "Bab 4",
    lessons: ["Materi 1", "Materi 2", "Materi 3", "Materi 4", "Materi 5", "Materi 6"],
  },
  {
    title: "Bab 5",
    lessons: ["Materi 1", "Materi 2", "Materi 3", "Materi 4", "Materi 5", "Materi 6"],
  },
];
</script>
