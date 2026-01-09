<template>
  <section
    id="about"
    class="relative -mt-20 overflow-hidden rounded-t-[60px] bg-white py-24 text-black"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 mb-32">
        <div
          class="w-full md:w-1/2 h-[400px] rounded-2xl relative overflow-hidden flex justify-center items-center"
        >
          <img
            v-for="(img, index) in stopImages"
            :key="index"
            :src="img"
            class="absolute w-auto h-[90%] object-contain transition-none rounded-2xl"
            :class="index === activeFrame ? 'opacity-100' : 'opacity-0'"
          />
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
              Professional AI-Driven Commercial Video Creator yang berfokus pada pembuatan video
              iklan dan campaign visual berbasis AI untuk brand, produk, dan jasa.
            </p>
            <p>
              Melalui Masterclass ini, aku membagikan workflow nyata, mindset kreatif, dan strategi
              storytelling yang aku gunakan untuk membantu brand owner, kreator, videografer, dan
              desainer mengubah AI menjadi alat produksi video iklan yang bernilai jual tinggi.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-32">
        <h3 class="text-center text-2xl font-bold mb-12 uppercase tracking-[0.2em] text-black">
          Hasil Beberapa Video AI
        </h3>

        <div class="relative overflow-hidden">
          <div
            class="flex gap-4 transition-transform duration-500"
            :style="{ transform: `translateX(-${currentIndex * (100 / visible)}%)` }"
          >
            <div
              v-for="(video, index) in videoListSrc"
              :key="index"
              class="aspect-video rounded-2xl overflow-hidden bg-black shrink-0"
              :style="{ width: `${100 / visible}%` }"
            >
              <iframe
                class="w-full h-full"
                :src="getEmbedUrl(video)"
                frameborder="0"
                allow="encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <button
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full p-3 shadow-lg transition"
            @click="prev"
          >
            ❮
          </button>

          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full p-3 shadow-lg transition"
            @click="next"
          >
            ❯
          </button>
        </div>
      </div>

      <div>
        <p class="text-center text-gray-400 font-medium mb-10 uppercase tracking-widest text-sm">
          Klien yang telah bekerja sama
        </p>

        <div class="space-y-6">
          <div class="relative overflow-hidden">
            <div
              class="flex space-x-10 animate-marquee whitespace-nowrap opacity-80 transition-all duration-500 py-3"
            >
              <div
                v-for="(logo, index) in firstRow"
                :key="index"
                class="client-logo w-28 h-14 md:w-32 md:h-16"
              >
                <img :src="logo" alt="Client Logo" loading="lazy" />
              </div>

              <div
                v-for="(logo, index) in firstRow"
                :key="'dup1-' + index"
                class="client-logo w-28 h-14 md:w-32 md:h-16"
              >
                <img :src="logo" alt="Client Logo" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden">
            <div
              class="flex space-x-10 animate-marquee-reverse whitespace-nowrap opacity-80 transition-all duration-500 py-3"
            >
              <div
                v-for="(logo, index) in secondRow"
                :key="index"
                class="client-logo w-28 h-14 md:w-32 md:h-16"
              >
                <img :src="logo" alt="Client Logo" loading="lazy" />
              </div>

              <div
                v-for="(logo, index) in secondRow"
                :key="'dup2-' + index"
                class="client-logo w-28 h-14 md:w-32 md:h-16"
              >
                <img :src="logo" alt="Client Logo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { videoList, clientLogo } from "~/constant/assets";

const stopImages = ["https://cdn.qiblat.my.id/stop 1.png", "https://cdn.qiblat.my.id/stop 2.png"];

const activeFrame = ref(0);
let stopInterval = null;

const videoListSrc = ref(videoList);
const clientListSrc = ref(clientLogo);

const currentIndex = ref(0);
const windowWidth = ref(0);

const firstRow = computed(() => clientListSrc.value.slice(0, 12));
const secondRow = computed(() => clientListSrc.value.slice(12));

const onResize = () => {
  if (import.meta.client) {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", onResize);

  stopInterval = setInterval(() => {
    activeFrame.value = activeFrame.value >= stopImages.length - 1 ? 0 : activeFrame.value + 1;
  }, 400);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  clearInterval(stopInterval);
});

const visible = computed(() => {
  if (windowWidth.value >= 1024) return 4;
  if (windowWidth.value >= 768) return 3;
  return 1;
});

const maxIndex = computed(() => Math.max(videoListSrc.value.length - visible.value, 0));

const next = () => {
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1;
};

const prev = () => {
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1;
};

const getEmbedUrl = (url) => {
  const id = url.includes("youtu.be")
    ? url.split("youtu.be/")[1].split("?")[0]
    : url.split("v=")[1].split("&")[0];

  return `https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1`;
};
</script>

<style scoped>
.client-logo {
  @apply flex items-center justify-center shrink-0;
}

.client-logo img {
  @apply max-w-[80%] max-h-[80%] object-contain;
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
.animate-marquee-reverse {
  animation: marquee-reverse 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee:hover,
.animate-marquee-reverse:hover {
  animation-play-state: paused;
}
</style>
