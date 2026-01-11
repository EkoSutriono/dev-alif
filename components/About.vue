<template>
  <section
    id="about"
    class="relative -mt-20 overflow-hidden rounded-t-[60px] bg-linear-to-b from-black via-black/20 to-white md:py-24 py-4 text-white"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row items-center md:gap-12 gap-6 md:mb-32 mb-16">
        <div
          data-aos="fade-right"
          class="w-full md:w-1/2 md:h-[400px] h-[200px] rounded-2xl relative overflow-hidden flex justify-center items-center bg-black/20"
        >
          <NuxtImg
            src="https://cdn.qiblat.my.id/alif.gif"
            class="absolute w-auto h-[90%] object-contain rounded-2xl transition-opacity duration-300 ease-in-out"
            alt="Alif Ma'luf Bio Visual"
            format="gif"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div data-aos="fade-left" class="w-full md:w-1/2">
          <h2 class="text-4xl font-black mb-6 tracking-tight text-white">
            Bio Singkat
            <span class="text-white">Alif Ma'luf</span>
          </h2>

          <div class="space-y-4 text-gray-300 md:text-lg text-sm leading-relaxed">
            <p>
              Professional AI-Driven Commercial Video Creator yang berfokus pada pembuatan video
              iklan dan campaign visual berbasis AI.
            </p>
            <p>
              Melalui Masterclass ini, aku membagikan workflow nyata, mindset kreatif, dan strategi
              storytelling.
            </p>
          </div>
        </div>
      </div>

      <h3
        data-aos="fade-up"
        class="text-center text-2xl font-bold mb-12 uppercase tracking-[0.2em] text-white"
      >
        Hasil Beberapa Video AI
      </h3>

      <div class="relative group/slider min-h-[300px] md:px-12 w-full">
        <client-only>
          <Carousel
            :autoplay="autoplayPaused ? 0 : 50"
            :transition="carouselDuration"
            transition-easing="linear"
            wrap-around
            :items-to-show="windowWidth < 768 ? 1.1 : 'auto'"
            snap-align="center"
            :mouse-drag="true"
            :touch-drag="true"
            pause-autoplay-on-hover
            class="draggable-marquee results-carousel w-full overflow-visible"
            :class="{ 'is-paused': autoplayPaused }"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
          >
            <Slide v-for="(video, index) in videoListSrc" :key="index">
              <div class="px-2">
                <div
                  class="rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 relative"
                  :class="
                    video.type === 'portrait'
                      ? 'h-[400px] md:h-[500px] aspect-9/16'
                      : 'w-[85vw] md:w-auto md:h-[500px] aspect-video'
                  "
                >
                  <VideoPlayer :url="video.url" :orientation="video.type" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </client-only>
      </div>
    </div>
    <div class="px-4">
      <div
        data-aos="fade-up"
        class="md:mt-24 mt-16 bg-white md:rounded-[60px] rounded-[2.5rem] shadow-xl p-8 container mx-auto"
      >
        <p class="text-center text-black font-medium mb-10 uppercase tracking-widest text-sm">
          Klien yang telah bekerja sama
        </p>

        <client-only>
          <div class="flex flex-col gap-4">
            <Vue3Marquee :duration="windowWidth < 768 ? 20 : 40" pause-on-hover>
              <div
                v-for="(logo, i) in firstRow"
                :key="i"
                class="flex items-center justify-center px-4 md:px-8 h-12 md:h-20 w-28 md:w-48 shrink-0 transition-all duration-300"
              >
                <NuxtImg
                  :src="logo"
                  class="max-h-full max-w-full object-contain transition-all duration-500"
                  :class="getLogoWidthClass(logo)"
                  format="webp"
                  loading="lazy"
                />
              </div>
            </Vue3Marquee>

            <Vue3Marquee :duration="windowWidth < 768 ? 20 : 40" direction="reverse" pause-on-hover>
              <div
                v-for="(logo, i) in secondRow"
                :key="i"
                class="flex items-center justify-center px-4 md:px-8 h-12 md:h-20 w-28 md:w-48 shrink-0 transition-all duration-300"
              >
                <NuxtImg
                  :src="logo"
                  class="max-h-full max-w-full object-contain transition-all duration-500"
                  :class="getLogoWidthClass(logo)"
                  format="webp"
                  loading="lazy"
                />
              </div>
            </Vue3Marquee>
          </div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { Vue3Marquee } from "vue3-marquee";
import { videoList, clientLogo } from "~/constant/assets";
import { useVideoManager } from "~/composables/useVideoManager";

const { currentlyPlayingId } = useVideoManager();

const isHovered = ref(false);
const autoplayPaused = computed(() => isHovered.value || !!currentlyPlayingId.value);

const windowWidth = ref(0);
const carouselDuration = computed(() => (windowWidth.value < 768 ? 5000 : 4000));

let handleResize;
let rafId;

const videoListSrc = ref(videoList);
const clientListSrc = ref(clientLogo);

const firstRow = computed(() => clientListSrc.value.slice(0, 12));
const secondRow = computed(() => clientListSrc.value.slice(12));

const getLogoWidthClass = (logo) => {
  if (logo === clientLogo[1]) return "w-24";
  if (logo === clientLogo[9]) return "w-20";
  if (logo === clientLogo[11]) return "w-60";
  if (logo === clientLogo[12]) return "w-16";
  if (logo === clientLogo[13]) return "w-24";
  if (logo === clientLogo[16]) return "w-16";
  if (logo === clientLogo[17]) return "w-20";
  if (logo === clientLogo[15]) return "w-24";
  if (logo === clientLogo[20]) return "w-20";
  if (logo === clientLogo[21]) return "w-14";
  if (logo === clientLogo[22]) return "w-16";
  return "";
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

onMounted(() => {
  windowWidth.value = window.innerWidth;

  handleResize = debounce(() => {
    windowWidth.value = window.innerWidth;
  }, 150);

  window.addEventListener("resize", handleResize, { passive: true });

  let lastTime = 0;
  const animate = (currentTime) => {
    if (currentTime - lastTime >= 500) {
      lastTime = currentTime;
    }
    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
});
</script>

<style scoped>
:deep(.draggable-marquee.is-paused .carousel__track) {
  transition: transform 0.8s ease-out !important;
}

:deep(.carousel__slide) {
  padding: 1rem 0.5rem;
  width: auto !important;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform;
}

:deep(.carousel__track) {
  align-items: stretch;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

:deep(.carousel__slide img),
:deep(.carousel__slide video) {
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.05);
}

@media (max-width: 768px) {
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    width: 32px;
    height: 32px;
  }
}

:deep(.v3m-container) {
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
