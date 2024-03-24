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
			},
			keyframes: {
				jiggle: {
					'0%, 100%': {
						transform: 'translateX(0)',
					},
					'50%': {
						transform: 'translateX(-10px)',
					},
					"100%": {
						transform: "translateX(0)"
					}
				},
			},
			animation: {
				jiggle: 'jiggle 1s ease-in-out forwards 2',
			}
		}
	},
	plugins: [],
}
