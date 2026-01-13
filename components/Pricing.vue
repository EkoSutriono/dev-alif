<template>
  <section
    id="pricing"
    data-aos="fade-up"
    class="bg-white md:py-32 py-16 relative overflow-hidden text-black"
  >
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-5xl font-black text-center md:mb-24 mb-8 uppercase">Pricing</h2>

      <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
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
              <span class="text-4xl font-black text-black">Rp 86k</span>
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
                Diskon 66%
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
              <span class="text-2xl text-[#947a23] line-through">Rp 456k</span>
              <br />
              <span class="text-4xl font-black text-[#947a23]">Rp 156k</span>
              <span class="text-gray-400">/sekali bayar</span>
            </div>
            <ul class="space-y-4">
              <li
                v-for="feature in ultimateFeatures"
                :key="feature"
                class="flex items-center gap-3 text-[#947a23]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-[#947a23]"
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
              class="w-full h-14 rounded-2xl bg-[#947a23] text-white font-bold hover:bg-black transition-all active:scale-95 shadow-xl shadow-black/10"
              @click="handleClick('ultimate')"
            >
              Pilih Ultimate
            </button>
            <span class="text-sm text-center text-red-500">Berakhir dalam {{ countdown }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const premiumFeatures = ["Materi 5 Bab inti", "25+ modul pembelajaran", "Akses selamanya"];

const ultimateFeatures = [
  "Materi 5 Bab inti",
  "25+ modul pembelajaran",
  "Akses selamanya",
  "Grup komunitas",
  "Update materi & teknik baru",
  "Sharing session rutin",
  "Bedah project Alif Ma`luf",
];

const countdown = ref("00:00:00:00");
let timer = null;

const updateCountdown = (endTime) => {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) {
    countdown.value = "Offer Ended";
    if (timer) clearInterval(timer);
    return;
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
  const STORAGE_KEY = "ultimate_countdown_expiry";
  let expiry = localStorage.getItem(STORAGE_KEY);

  if (!expiry) {
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    expiry = new Date().getTime() + sevenDaysInMs;
    localStorage.setItem(STORAGE_KEY, expiry.toString());
  } else {
    expiry = parseInt(expiry);
  }

  updateCountdown(expiry);
  timer = setInterval(() => updateCountdown(expiry), 1000);
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
