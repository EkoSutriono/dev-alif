<template>
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

        <template #fallback>
          <div class="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
            <div
              v-for="(logo, i) in clientLogo.slice(0, 10)"
              :key="i"
              class="flex items-center justify-center h-12 md:h-20 w-28 md:w-48 shrink-0 border border-black/5 rounded-xl p-2 md:p-4"
            >
              <NuxtImg
                :src="logo"
                class="max-h-full max-w-full object-contain grayscale opacity-20"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </template>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Vue3Marquee } from "vue3-marquee";
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
:deep(.v3m-container) {
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
