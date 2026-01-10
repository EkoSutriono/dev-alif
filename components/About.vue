<template>
  <section
    id="about"
    class="relative -mt-20 overflow-hidden rounded-t-[60px] bg-linear-to-b from-black via-black/20 to-white md:py-24 py-4 text-white"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row items-center md:gap-12 gap-6 md:mb-32 mb-16">
        <div
          class="w-full md:w-1/2 md:h-[400px] h-[200px] rounded-2xl relative overflow-hidden flex justify-center items-center"
        >
          <NuxtImg
            v-for="(img, index) in stopImages"
            :key="index"
            :src="img"
            class="absolute w-auto h-[90%] object-contain transition-none rounded-2xl"
            :class="index === activeFrame ? 'opacity-100' : 'opacity-0'"
            alt="Alif Ma'luf Bio Visual"
            format="webp"
            loading="lazy"
          />
        </div>

        <div class="w-full md:w-1/2">
          <h2 class="text-4xl font-black mb-6 tracking-tight text-white">
            Bio Singkat
            <span class="text-white decoration-white decoration-4">Alif Ma'luf</span>
          </h2>
          <div class="space-y-4 text-gray-300 md:text-lg text-sm leading-relaxed">
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

      <h3 class="text-center text-2xl font-bold mb-12 uppercase tracking-[0.2em] text-white">
        Hasil Beberapa Video AI
      </h3>

      <div class="relative group/slider min-h-[300px] md:px-12 w-full">
        <client-only>
          <Carousel
            :autoplay="autoplayPaused ? 0 : 50"
            :transition="currentTransition"
            :transition-easing="'linear'"
            :wrap-around="true"
            :items-to-show="windowWidth < 768 ? 1.1 : 'auto'"
            :snap-align="'center'"
            :mouse-drag="false"
            :touch-drag="false"
            :pause-autoplay-on-hover="true"
            class="results-carousel w-full overflow-visible"
            :class="{ 'is-paused': autoplayPaused }"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
          >
            <Slide v-for="(video, index) in videoListSrc" :key="index">
              <div class="px-2">
                <div
                  class="rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 group relative"
                  :class="[
                    video.type === 'portrait'
                      ? 'h-[400px] md:h-[500px] aspect-9/16'
                      : 'w-[85vw] md:w-auto md:h-[500px] aspect-video',
                  ]"
                >
                  <VideoPlayer :url="video.url" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <template #placeholder>
            <div class="flex gap-4 overflow-hidden px-2 md:px-16 w-full">
              <div
                v-for="i in 3"
                :key="i"
                class="shrink-0 aspect-9/16 h-[400px] md:h-[500px] bg-zinc-900 rounded-2xl animate-pulse"
              ></div>
            </div>
          </template>
        </client-only>
      </div>
    </div>

    <div class="md:mt-24 mt-16 bg-white rounded-[60px] shadow-xl p-8 container mx-auto">
      <p class="text-center text-black font-medium mb-10 uppercase tracking-widest text-sm">
        Klien yang telah bekerja sama
      </p>

      <div class="space-y-4">
        <client-only>
          <Vue3Marquee :duration="windowWidth < 768 ? 15 : 40" :pause-on-hover="true">
            <div v-for="(logo, index) in firstRow" :key="index" class="client-logo px-5">
              <NuxtImg
                :src="logo"
                alt="Client Logo Alif Ma'luf"
                class="w-16 h-12 md:w-32 md:h-16 object-contain"
                format="webp"
                loading="lazy"
              />
            </div>
          </Vue3Marquee>

          <Vue3Marquee
            :duration="windowWidth < 768 ? 15 : 40"
            :direction="'reverse'"
            :pause-on-hover="true"
          >
            <div v-for="(logo, index) in secondRow" :key="index" class="client-logo px-5">
              <NuxtImg
                :src="logo"
                alt="Client Logo Alif Ma'luf"
                class="w-16 h-12 md:w-32 md:h-16 object-contain"
                format="webp"
                loading="lazy"
              />
            </div>
          </Vue3Marquee>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { videoList, clientLogo } from "~/constant/assets";
import { useVideoManager } from "~/composables/useVideoManager";

const { currentlyPlayingId } = useVideoManager();

const isHovered = ref(false);
const carouselDuration = computed(() => (windowWidth.value < 768 ? 5000 : 4000));

const autoplayPaused = computed(() => !!currentlyPlayingId.value || isHovered.value);

const currentTransition = computed(() => {
  if (autoplayPaused.value) return 200; // Snappy for manual navigation
  return carouselDuration.value - 50; // Compensate for 50ms autoplay delay
});

const stopImages = [
  "https://cdn.qiblat.my.id/stop 1.png",
  "https://cdn.qiblat.my.id/stop-2-new.png",
];

const activeFrame = ref(0);
let stopInterval = null;

const videoListSrc = ref(videoList);
const clientListSrc = ref(clientLogo);

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
  const throttledResize = () => {
    let timeout = null;
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          onResize();
          timeout = null;
        }, 200);
      }
    };
  };
  const handleResize = throttledResize();
  window.addEventListener("resize", handleResize);

  stopInterval = setInterval(() => {
    activeFrame.value = activeFrame.value >= stopImages.length - 1 ? 0 : activeFrame.value + 1;
  }, 400);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  clearInterval(stopInterval);
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.client-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Extreme linear motion for marquee effect - only when autoplay is active */
:deep(.draggable-marquee:not(.is-paused) .carousel__track) {
  transition-timing-function: linear !important;
  will-change: transform;
}

:deep(.draggable-marquee.is-paused .carousel__track) {
  transition-duration: 0.1s !important;
  transition-timing-function: ease-out !important;
}

:deep(.carousel__slide) {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: auto !important;
}

:deep(.carousel__track) {
  align-items: stretch;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  transition: all 0.3s;
  z-index: 20;
  position: absolute;
  top: 50% !important;
  transform: translateY(-50%) !important;
  margin: 0;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-50%) scale(1.1) !important;
}

:deep(.carousel__prev:active),
:deep(.carousel__next:active) {
  transform: translateY(-50%) scale(0.95) !important;
}

:deep(.carousel__prev) {
  left: 1rem;
}

:deep(.carousel__next) {
  right: 1rem;
}

@media (max-width: 768px) {
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    width: 32px;
    height: 32px;
  }
}
</style>
