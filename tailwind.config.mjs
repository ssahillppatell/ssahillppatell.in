/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Josefin Sans', 'sans-serif', 'system-ui'],
		},
		extend: {
			colors: {
				offWhite: '#FAF9F6',
				primary: '#5B98F4'
			}
		},
	},
	plugins: [],
}
