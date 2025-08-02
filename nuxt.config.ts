// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Fred David Solís Gutiérrez Portfolio | Software Developer",
      meta: [
        {
          name: "Fred David Solís Gutiérrez Portfolio | Software Developer",
          content:
            "This is Fred David Solis Gutierrez's portfolio, where he showcases various projects and the skills he has acquired.",
        },
        {
          name: "theme-color",
          content: "#737373"
        }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/logo-fred.png" }],
    },
  },

  devtools: { enabled: true },
  srcDir: "src/",
  css: ["@/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
      }
    ]
  ],
});
