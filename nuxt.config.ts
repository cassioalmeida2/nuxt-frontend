// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import path from 'path';

export default defineNuxtConfig({
	devtools: { enabled: true },
	build: {transpile: ["vuetify"]},
	modules: [
		(_options, nuxt) => {
		  nuxt.hooks.hook('vite:extendConfig', (config) => {
			// @ts-expect-error
			config.plugins.push(vuetify({
				autoImport: true,
			}))
		  })
		},
		'nuxt-svgo'
		//...
	],
	typescript: {shim: false},
	vite: {
		vue: {
			template: {
			transformAssetUrls,
			},
		},

		css: {
			preprocessorOptions: {
				scss: {additionalData: `@import "@/assets/styles/main.scss";`}
			}
		}
	},
})
