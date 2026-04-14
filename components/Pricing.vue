<template>
  <section
    id="pricing"
    data-aos="fade-up"
    class="bg-white md:py-32 py-16 relative overflow-hidden text-black"
  >
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-5xl font-black text-center md:mb-24 mb-8 uppercase">Pricing</h2>

      <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full md:w-1/2 bg-white rounded-[2.5rem] border border-black/10 overflow-hidden flex flex-col group hover:border-black/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
        >
          <div class="p-8 border-b border-black/5">
            <h3 class="text-2xl font-black text-black mb-2 uppercase">Premium</h3>
            <p class="text-gray-500 text-sm">
              Cocok untuk kamu yang ingin mulai masuk ke dunia AI untuk produksi video iklan tanpa
              ribet. Pelajari fondasi penting, alur kerja, dan mindset yang tepat agar kamu paham
              bagaimana AI digunakan secara profesional.
            </p>
          </div>
          <div class="p-8 grow">
            <div class="mb-8">
              <span class="text-4xl font-black text-black">Rp 156k</span>
              <span class="text-gray-400">/sekali bayar</span>
            </div>
            <ul class="space-y-4">
              <li
                v-for="feature in premiumFeatures"
                :key="feature"
                class="flex items-center gap-3 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="p-8 pt-0">
            <button
              id="premium-button"
              class="w-full h-14 rounded-2xl border border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-all active:scale-95"
              @click="handleClick('premium')"
            >
              Pilih Premium
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="ultimate-border w-full md:w-1/2 bg-white rounded-[2.5rem] overflow-hidden flex flex-col relative group hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
        >
          <div class="absolute top-0 left-0 right-0 h-2 bg-[#947a23]"></div>

          <div class="p-8 border-b border-black/10 pt-10">
            <div class="flex flex-row xs:flex-col justify-between items-center mb-2">
              <h3 class="text-2xl font-black text-[#947a23] uppercase">Ultimate</h3>
              <span
                class="px-3 py-1 bg-[#947a23] text-[16px] font-black uppercase text-white rounded-full text-center"
              >
                Diskon 44%
              </span>
            </div>
            <p class="text-gray-500 text-sm">
              Paket paling lengkap untuk kamu yang ingin naik level jadi profesional AI-driven
              video. Bukan cuma materi, tapi juga ekosistem belajar: komunitas, update teknik
              terbaru, dan sharing rutin agar skill kamu terus relevan dan berkembang.
            </p>
          </div>
          <div class="p-8 grow">
            <div class="mb-8">
              <span class="text-2xl text-[#947a23] line-through">Rp 756k</span>
              <br />
              <span class="text-4xl font-black text-[#947a23]">Rp 456k</span>
              <span class="text-gray-400">/sekali bayar</span>
            </div>
            <ul class="space-y-4">
              <li
                v-for="(feature, index) in ultimateFeatures"
                :key="feature"
                :class="[
                  'flex items-center gap-3',
                  index === ultimateFeatures.length - 1
                    ? 'text-red-600 font-semibold'
                    : 'text-[#947a23]',
                ]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="p-8 pt-0 flex flex-col gap-2">
            <button
              id="ultimate-button"
              class="w-full h-14 rounded-2xl bg-[#947a23] text-white font-bold hover:bg-black transition-all active:scale-95 shadow-xl shadow-black/10"
              @click="handleClick('ultimate')"
            >
              Pilih Ultimate
            </button>
            <span class="text-sm text-center text-red-500">Berakhir dalam {{ countdown }}</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="w-full md:w-1/2 bg-white rounded-[2.5rem] border border-black/10 overflow-hidden flex flex-col group hover:border-black/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
        >
          <div
            class="aspect-video rounded-3xl bg-black border border-white/10 overflow-hidden relative"
          >
            <div
              class="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg"
            >
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live session - bedah Film AI Batch 1
            </div>
            <client-only>
              <iframe
                src="https://www.youtube.com/embed/d9aEvxAFB4E?autoplay=1&mute=1&loop=1&playlist=d9aEvxAFB4E&controls=0&showinfo=0&rel=0"
                class="w-full h-full pointer-events-none"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </client-only>
          </div>
          <div class="p-8 grow">
            <div class="mb-8">
              <span class="text-4xl font-black text-black">Rp 86k</span>
              <span class="text-gray-400">/sekali bayar</span>
            </div>
            <span class="text-black font-bold">Yang akan dipelajari:</span>
            <ul class="space-y-4 mt-2">
              <li
                v-for="feature in liveObject"
                :key="feature"
                class="flex items-center gap-3 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
            <div class="mt-5">
              <span class="text-black font-bold">Yang akan didapatkan:</span>
            </div>
            <ul class="space-y-4 mt-2">
              <li
                v-for="feature in liveGot"
                :key="feature"
                class="flex items-center gap-3 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="p-8 pt-0">
            <button
              id="premium-button"
              class="w-full h-14 rounded-2xl border border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-all active:scale-95"
              @click="handleClick('live')"
            >
              Pilih Bedah Film
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const countdown = ref("");
let timer = null;

const premiumFeatures = ["Materi 5 Bab inti", "25+ modul pembelajaran", "Akses selamanya"];
const liveObject = [
  "Filmmaking & Story",
  "Visual Thinking",
  "AI Production System",
  "Editing Video",
];
const liveGot = ["Recording Webinar", "Group Diskusi"];

const ultimateFeatures = [
  "Materi 5 Bab inti",
  "25+ modul pembelajaran",
  "Akses selamanya",
  "Grup komunitas",
  "Update materi & teknik baru",
  "Sharing session rutin",
  "Live Session - Bedah Film AI Batch 1 (2 Mei 2026)",
];

const STORAGE_KEY = "ultimate_countdown_expiry";

const getNewExpiry = () => {
  const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
  return new Date().getTime() + sevenDaysInMs;
};

const updateCountdown = () => {
  if (!import.meta.client) return;

  let expiry = parseInt(localStorage.getItem(STORAGE_KEY));
  if (!expiry) {
    expiry = getNewExpiry();
    localStorage.setItem(STORAGE_KEY, expiry.toString());
  }

  const now = new Date().getTime();
  let distance = expiry - now;

  if (distance < 0) {
    // Reset countdown for another 7 days
    expiry = getNewExpiry();
    localStorage.setItem(STORAGE_KEY, expiry.toString());
    distance = expiry - now;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.value = `${days.toString().padStart(2, "0")}h : ${hours
    .toString()
    .padStart(2, "0")}m : ${minutes.toString().padStart(2, "0")}s : ${seconds
    .toString()
    .padStart(2, "0")}s`;
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const handleClick = (plan) => {
  if (plan === "premium") {
    window.open(
      "https://alifmaluf.myr.id/pl/paket-premium-masterclass-produksi-video-profesional-pakai-ai",
      "_blank"
    );
  } else if (plan === "ultimate") {
    window.open(
      "https://alifmaluf.myr.id/pl/paket-ultimate-masterclass-produksi-video-profesional-pakai-ai-4iav",
      "_blank"
    );
  } else if (plan === "live") {
    window.open("https://alifmaluf.myr.id/pl/bedah-film-pakai-ai", "_blank");
  }
};
</script>

<style scoped>
.ultimate-border {
  position: relative;
  border-radius: 2.5rem;
}

.ultimate-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 3px;
  border-radius: inherit;

  background: linear-gradient(90deg, #947a23, transparent, #d3af37, transparent, #d3af37);
  background-size: 300% 300%;

  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  pointer-events: none;
}

.ultimate-border::before {
  animation: borderMove 5s linear infinite;
}

@keyframes borderMove {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 300% 50%;
  }
}

.ultimate-border > * {
  position: relative;
  z-index: 1;
}
</style>
