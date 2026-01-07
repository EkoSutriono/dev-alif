<template>
  <div ref="navbarRef" class="fixed top-4 left-0 right-0 z-[9999] flex justify-center px-4">
    <div
      class="flex w-full max-w-7xl items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md transition-all duration-300"
      :class="{ 'rounded-b-none border-b-0': showMenu }"
    >
      <div class="flex items-center">
        <NuxtLink to="/" class="group relative flex items-center gap-2">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-black transition-transform duration-300 group-hover:scale-110"
          >
            A
          </div>
          <span class="text-2xl font-black tracking-tighter text-white">Alif Ma'luf</span>
        </NuxtLink>
      </div>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="menu in listMenu"
          :key="menu.name"
          :to="menu.href"
          class="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
        >
          {{ menu.name }}
        </NuxtLink>
        <NuxtLink
          to="/#about"
          class="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
        >
          <button
            class="rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-all duration-200 hover:bg-gray-200 active:scale-95"
          >
            Mulai
          </button>
        </NuxtLink>
      </div>

      <div class="flex md:hidden">
        <button
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
          @click.stop="toggleMenu"
        >
          <svg
            v-if="!showMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-current"
            viewBox="0 0 512 512"
          >
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="slide-fade">
      <div
        v-if="showMenu"
        class="absolute top-full left-4 right-4 overflow-hidden rounded-b-2xl border border-t-0 border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
      >
        <ul class="flex flex-col p-4">
          <li v-for="menu in listMenu" :key="menu.name">
            <NuxtLink
              :to="menu.href"
              class="flex w-full items-center py-4 text-xl font-semibold text-white transition-colors hover:text-gray-400"
              @click="showMenu = false"
            >
              {{ menu.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showMenu = ref(false);
const navbarRef = ref(null);

const listMenu = [
  { name: "Beranda", href: "/" },
  { name: "Materi", href: "/#materi" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
];

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const handleClickOutside = (event) => {
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    showMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.7, 0, 0.84, 0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
