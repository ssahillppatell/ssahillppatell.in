import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: isProd ? "https://ssahillppatell.github.io/ssahillppatell.in/" : "http://localhost:4321"
});