// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Masterclass AI - Alif Ma'luf | Produksi Video Iklan Profesional Pakai AI",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Kuasai teknik produksi video iklan profesional dengan teknologi AI. Dirancang khusus oleh Alif Ma'luf untuk brand owner, kreator, dan videografer.",
        },
        {
          name: "keywords",
          content:
            "masterclass ai, alif ma'luf, video ai, produksi video iklan, ai commercial video, tutorial ai, kursus ai indonesia",
        },
        { name: "author", content: "Alif Ma'luf" },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://masterclassvideoiklanai.alifmaluf.id/" },
        { property: "og:title", content: "Masterclass AI - Alif Ma'luf" },
        {
          property: "og:description",
          content:
            "Produksi Video Iklan Profesional Pakai AI. Pelajari workflow nyata dari Alif Ma'luf.",
        },
        { property: "og:image", content: "https://cdn.qiblat.my.id/Logo-only-Alif-Maluf.png" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://masterclassvideoiklanai.alifmaluf.id/" },
        { name: "twitter:title", content: "Masterclass AI - Alif Ma'luf" },
        {
          name: "twitter:description",
          content:
            "Produksi Video Iklan Profesional Pakai AI. Pelajari workflow nyata dari Alif Ma'luf.",
        },
        { name: "twitter:image", content: "https://cdn.qiblat.my.id/Logo-only-Alif-Maluf.png" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://cdn.qiblat.my.id/Logo-only-Alif-Maluf.png",
        },
        { rel: "preconnect", href: "https://cdn.qiblat.my.id" },
        { rel: "preconnect", href: "https://www.youtube.com" },
        { rel: "preconnect", href: "https://i.ytimg.com" },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-62W2T3Z522",
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-62W2T3Z522');
          `,
          type: "text/javascript",
        },
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1387993092761749');
            fbq('track', 'PageView');
          `,
          type: "text/javascript",
        },
      ],
      noscript: [
        {
          innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1387993092761749&ev=PageView&noscript=1" />`,
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

  modules: ["@nuxt/eslint", "@nuxt/image"],
  image: {
    domains: ["cdn.qiblat.my.id", "i.ytimg.com", "storage.googleapis.com"],
  },
});
