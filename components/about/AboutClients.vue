<template>
  <div class="px-4">
    <div
      data-aos="fade-up"
      class="md:mt-24 mt-16 bg-white md:rounded-[60px] rounded-[2.5rem] shadow-xl p-8 container mx-auto"
    >
      <p class="text-center text-black font-medium mb-10 uppercase tracking-widest text-sm">
        Klien yang telah bekerja sama
      </p>

      <div class="marquee-wrapper flex flex-col gap-4">
        <!-- First Row -->
        <div
          class="marquee-container"
          :style="{ '--duration': (windowWidth < 768 ? 20 : 40) + 's' }"
        >
          <div class="marquee-content marquee-right">
            <div v-for="(logo, i) in firstRow" :key="'row1-' + i" class="marquee-item">
              <NuxtImg
                :src="logo"
                class="max-h-full max-w-full object-contain transition-all duration-500"
                :class="getLogoWidthClass(logo)"
                format="webp"
                loading="lazy"
              />
            </div>
            <!-- Duplicate for seamless loop -->
            <div v-for="(logo, i) in firstRow" :key="'row1-dup-' + i" class="marquee-item">
              <NuxtImg
                :src="logo"
                class="max-h-full max-w-full object-contain transition-all duration-500"
                :class="getLogoWidthClass(logo)"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div
          class="marquee-container"
          :style="{ '--duration': (windowWidth < 768 ? 20 : 40) + 's' }"
        >
          <div class="marquee-content marquee-left">
            <div v-for="(logo, i) in secondRow" :key="'row2-' + i" class="marquee-item">
              <NuxtImg
                :src="logo"
                class="max-h-full max-w-full object-contain transition-all duration-500"
                :class="getLogoWidthClass(logo)"
                format="webp"
                loading="lazy"
              />
            </div>
            <!-- Duplicate for seamless loop -->
            <div v-for="(logo, i) in secondRow" :key="'row2-dup-' + i" class="marquee-item">
              <NuxtImg
                :src="logo"
                class="max-h-full max-w-full object-contain transition-all duration-500"
                :class="getLogoWidthClass(logo)"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { clientLogo } from "~/constant/assets";

const clientListSrc = ref(clientLogo);
const firstRow = computed(() => clientListSrc.value.slice(0, 12));
const secondRow = computed(() => clientListSrc.value.slice(12));

const windowWidth = ref(0);
let handleResize;

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
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
}

.marquee-content {
  display: flex;
  flex-direction: row;
  width: max-content;
  animation: marquee var(--duration) linear infinite;
}

.marquee-content:hover {
  animation-play-state: paused;
}

.marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 3rem;
  width: 7rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  .marquee-item {
    padding: 0 2rem;
    height: 5rem;
    width: 12rem;
  }
}

.marquee-right {
  animation-name: scroll-right;
}

.marquee-left {
  animation-name: scroll-left;
}

@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
