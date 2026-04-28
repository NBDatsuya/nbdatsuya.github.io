// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/google-fonts"],
  vite: {
    plugins: [tailwindcss()]
  },
  css: ["./app/assets/style/main.css"],
  devServer: {
    port: 8099
  },
  ui: {
    fonts: false
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
	ssr:true,
	nitro:{
		preset:'github-pages'
	},
    head: {
      script: [
        // 防闪烁脚本
        {
          innerHTML: `
						(function() {
							const storageKey = 'nbdlog-theme';
							const attrKey = 'data-theme';
							try {
								const preference = localStorage.getItem(storageKey);
								if (preference) {
									document.documentElement.setAttribute(attrKey, preference);
								}
							} catch (e) {}
						})();
          `
        }
      ],
      link: [
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }
      ]
    }
  },
  ssr: true
});
