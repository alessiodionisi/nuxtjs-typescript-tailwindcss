import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
  target: "static",
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  head: {
    title: "Hello world!",
    meta: [
      { charset: "UTF-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
  },
  tailwindcss: {
    jit: true,
  },
}

export default config
