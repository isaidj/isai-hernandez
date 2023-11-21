import type { Config } from 'tailwindcss'
import {nextui} from '@nextui-org/theme'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  width: {
		"90": "35rem",
	  },
      fontSize: {
        '10xl': '10rem',
        '15xl': '15rem',
      
      },
      fontFamily: {
        display: ["var(--font-chalkboard)"],
		kgSummerSunshine: ["var(--font-kg-summer-sunshine)"],
      },
      animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				subTitle: "fade-in 2s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
				"fade-right-stay": "fade-right-stay 3s ease-in-out forwards",
				
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},

				},
				"fade-right-stay": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},
					"45%": {
						transform: "translateX(-65%)",
						opacity: "20%",
					},
					"65%": {
						transform: "translateX(-45%)",
						opacity: "40%",
					},
				
					"100%": {	
						opacity: "100%",
					},
					
				},


				title: {
					"0%": {
						// "line-height": "0%",
						// "fillRuleletterSpacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						// "line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						// "line-height": "100%",
						opacity: "100%",
					},
				},
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
