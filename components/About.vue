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
                  class="rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 relative cursor-pointer group/item"
                  :class="
                    video.type === 'portrait'
                      ? 'h-[400px] md:h-[500px] aspect-9/16'
                      : 'w-[85vw] md:w-auto md:h-[500px] aspect-video'
                  "
                  @click="openVideo(video)"
                >
                  <NuxtImg
                    v-if="getThumbnail(video.url)"
                    :src="getThumbnail(video.url)"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                    loading="lazy"
                    alt="Video Thumbnail"
                  />
                  <video
                    v-else-if="isVideo(video.url)"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                    preload="metadata"
                    muted
                    playsinline
                  >
                    <source :src="video.url" type="video/mp4" />
                  </video>
                  <div
                    v-else
                    class="w-full h-full bg-linear-to-br from-gray-800 to-black flex items-center justify-center"
                  >
                    <svg
                      class="w-12 h-12 text-white/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div class="absolute inset-0 flex items-center justify-center z-10">
                    <div
                      class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover/item:scale-110 group-hover/item:bg-white/30 transition-all duration-300 shadow-xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="w-8 h-8 md:w-10 md:h-10 text-white fill-current translate-x-0.5"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div
                    class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 to-transparent translate-y-2 group-hover/item:translate-y-0 opacity-100 transition-all duration-300 flex items-center gap-2"
                  >
                    <NuxtImg
                      :src="video.logo"
                      class="w-20 h-12 object-contain filter grayscale group-hover/item:grayscale-0"
                      format="webp"
                      loading="lazy"
                    />
                    <div class="w-px h-10 bg-white"></div>
                    <p class="text-white text-sm font-medium truncate">{{ video.title }}</p>
                  </div>
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

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="selectedVideo"
          class="fixed inset-0 z-1000 flex items-center justify-center bg-black/95 md:p-10 p-4"
          @click="closeVideo"
        >
          <div
            class="relative w-full max-w-6xl shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl bg-black border border-white/10"
            :class="
              selectedVideo.type === 'portrait'
                ? 'max-h-[90vh] aspect-9/16 h-full w-auto'
                : 'max-w-6xl aspect-video w-full'
            "
            @click.stop
          >
            <button
              type="button"
              class="absolute top-4 right-4 text-white/70 hover:text-white transition-all duration-300 z-1010 hover:scale-110 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/20"
              @click="closeVideo"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <VideoPlayer
              v-if="isAnimatingModalDone"
              :url="selectedVideo.url"
              :orientation="selectedVideo.type"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
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

const selectedVideo = ref(null);
const isAnimatingModalDone = ref(false);

const openVideo = (video) => {
  selectedVideo.value = video;
  document.body.style.overflow = "hidden";
  window.addEventListener("keydown", handleEsc);
  setTimeout(() => {
    isAnimatingModalDone.value = true;
  }, 400);
};

const closeVideo = () => {
  selectedVideo.value = null;
  isAnimatingModalDone.value = false;
  document.body.style.overflow = "auto";
  window.removeEventListener("keydown", handleEsc);
};

const handleEsc = (e) => {
  if (e.key === "Escape") closeVideo();
};

const getThumbnail = (url) => {
  if (!url) return null;
  const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(youtubeRegExp);
  if (match && match[2].length === 11) {
    return `https://i.ytimg.com/vi/${match[2]}/hqdefault.jpg`;
  }
  return null;
};

const isVideo = (url) => {
  if (!url) return false;
  const u = url.toLowerCase();
  return (
    u.includes(".mp4") ||
    u.includes("cdn.qiblat.my.id") ||
    u.startsWith("/") ||
    (u.startsWith("http") && !u.includes("youtube") && !u.includes("instagram"))
  );
};

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
