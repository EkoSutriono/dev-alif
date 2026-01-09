<template>
  <section id="pricing" class="bg-white py-32 relative overflow-hidden text-black">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl md:text-5xl font-black text-center mb-24 uppercase">Pricing</h2>

      <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
        <!-- Premium Plan -->
        <div
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
            >
              Pilih Premium
            </button>
          </div>
        </div>

        <div
          class="ultimate-border w-full md:w-1/2 bg-white rounded-[2.5rem] overflow-hidden flex flex-col relative group hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
        >
          <div class="absolute top-0 left-0 right-0 h-2 bg-black"></div>

          <div class="p-8 border-b border-black/10 pt-10">
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-2xl font-black text-black uppercase">Ultimate</h3>
              <span
                class="px-3 py-1 bg-black text-[10px] font-black uppercase text-white rounded-full"
              >
                Paling Populer
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
              <span class="text-4xl font-black text-black">Rp 456k</span>
              <span class="text-gray-400">/sekali bayar</span>
            </div>
            <ul class="space-y-4">
              <li
                v-for="feature in ultimateFeatures"
                :key="feature"
                class="flex items-center gap-3 text-black"
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
              class="w-full h-14 rounded-2xl bg-black text-white font-bold hover:bg-gray-900 transition-all active:scale-95 shadow-xl shadow-black/10"
            >
              Pilih Ultimate
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const premiumFeatures = ["Materi 5 Bab inti", "20+ modul pembelajaran", "Akses selamanya"];

const ultimateFeatures = [
  "Materi 5 Bab inti",
  "20+ modul pembelajaran",
  "Akses selamanya",
  "Grup komunitas",
  "Update materi & teknik baru",
  "Sharing session rutin",
  "Bedah project Alif Ma`luf",
];
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

  background: linear-gradient(90deg, black, transparent, black, transparent, black);
  background-size: 300% 300%;

  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  pointer-events: none;
}

.ultimate-border:hover::before {
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
