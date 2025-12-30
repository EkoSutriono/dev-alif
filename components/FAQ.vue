<template>
  <section id="faq" class="relative bg-black py-24 pb-48 text-white">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2
        class="text-3xl md:text-5xl font-black text-center mb-16 underline decoration-white decoration-4 underline-offset-8 uppercase"
      >
        FaQ
      </h2>

      <div class="space-y-4">
        <div
          v-for="(item, idx) in listFaq"
          :key="idx"
          class="group border border-white/10 rounded-3xl bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/20"
        >
          <button
            type="button"
            class="relative z-10 flex w-full cursor-pointer items-center justify-between p-6 text-left focus:outline-none"
            @click="item.isOpen = !item.isOpen"
          >
            <span class="text-lg font-bold text-white transition-colors group-hover:text-gray-200">
              {{ item.q }}
            </span>
            <div
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-500"
              :class="{ 'rotate-180 bg-white/30': item.isOpen }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div v-if="item.isOpen" class="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in">
            {{ item.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const listFaq = reactive([
  {
    q: "Apakah kelas ini cocok untuk pemula?",
    a: "Sangat cocok! Materi kami disusun sedemikian rupa sehingga siapapun, bahkan tanpa latar belakang IT atau desain, dapat mengikutinya dengan mudah.",
    isOpen: true,
  },
  {
    q: "Software apa saja yang perlu disiapkan?",
    a: "Kami akan menggunakan beberapa tools AI berbasis web yang ringan. Tidak diperlukan spesifikasi komputer yang tinggi, cukup browser yang terupdate.",
    isOpen: false,
  },
  {
    q: "Apakah ada grup dukungan setelah kelas?",
    a: "Ya, khusus paket Ultimate akan mendapatkan akses ke Komunitas VIP di Discord untuk diskusi berkelanjutan dan dukungan teknis.",
    isOpen: false,
  },
]);
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
