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
          <div class="w-full md:w-3/5">
            <div
              class="aspect-video rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 font-bold overflow-hidden group"
            >
              <div
                class="absolute inset-0 bg-linear-to-br from-white/5 to-black/5 group-hover:scale-110 transition-transform duration-700"
              ></div>
              <span class="relative z-10">Highlight Visual #{{ idx + 1 }}</span>
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
    title: "Highlight Materi 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Highlight Materi 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Highlight Materi 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];
</script>
