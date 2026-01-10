// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Masterclass AI - Alif Ma'luf",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://cdn.qiblat.my.id/Logo-only-Alif-Maluf.png",
        },
      ],
    },
  },

  routeRules: {
    "/**": {
      headers: {
        "Permissions-Policy": "compute-pressure=()",
      },
    },
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },

  modules: ["@nuxt/eslint"],
});
