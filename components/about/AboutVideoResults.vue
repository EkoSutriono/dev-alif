<template>
  <div class="px-4">
    <h3
      data-aos="fade-up"
      class="text-center text-2xl font-bold mb-12 uppercase tracking-[0.2em] text-white px-4"
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
          <Slide v-for="(video, index) in videoList" :key="index">
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
                  v-if="video.thumbnail"
                  :src="video.thumbnail"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                  loading="lazy"
                  alt="Video Thumbnail"
                />
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
                ? 'max-h-[55vh] aspect-9/16 h-full w-auto'
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { videoList } from "~/constant/assets";
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

const windowWidth = ref(0);
const carouselDuration = computed(() => (windowWidth.value < 768 ? 5000 : 4000));

let handleResize;

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
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
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
</style>
