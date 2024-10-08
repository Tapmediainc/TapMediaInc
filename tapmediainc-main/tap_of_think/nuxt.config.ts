// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

const apiURL = process.env.BACKEND_URL || 'http://localhost:8000';
export default defineNuxtConfig({
  css: [
    "@/assets/css/style.css",
    "@/assets/css/responsive.css"
  ],
  build: {},
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    buildAssetsDir:'/tap_of_think/',
    head: {
      title: "TAP Media Inc",
      htmlAttrs: {
        lang: "vn",
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'content-type', content: 'text-html', charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'x-ua-compatible', content: 'IE=edge' },
        { name: 'robots', content: 'index' },
        { name: 'description', content: 'TAP Media is a multimedia communications and technology conglomerate established in 2021 in the city of Las Vegas, Nevada, USA. In the era of Industry 4.0 and artificial intelligence, the world is gradually adapting to these advancements.'}
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Sacramento&display=swap",
        },
        { rel: 'icon', type: 'image/png', href: "/Favicons.png" }
      ],
      script: [
        { src: "/js/core.min.js", tagPosition: "bodyClose"},
        { src: "/js/popper.min.js", tagPosition: "bodyClose"},
        { src: "/js/bootstrap.min.js", tagPosition: "bodyClose"},
        { src: "/js/plugins.min.js", tagPosition: "bodyClose"},
        { src: "/js/scripts.js", tagPosition: "bodyClose"},
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    public: {
      apiURL,
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  ssr: true,
  routeRules: {
    '/finish-sso': { ssr: false},
  },
});
