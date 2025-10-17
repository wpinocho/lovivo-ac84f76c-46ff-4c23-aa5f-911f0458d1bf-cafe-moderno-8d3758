import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '240 5% 20%',
				input: '240 5% 20%',
				ring: '280 100% 70%',
				background: '240 10% 3.9%',
				foreground: '0 0% 98%',
				primary: {
					DEFAULT: '280 100% 70%',
					foreground: '0 0% 0%'
				},
				secondary: {
					DEFAULT: '30 100% 60%',
					foreground: '0 0% 0%'
				},
				destructive: {
					DEFAULT: '0 84.2% 60.2%',
					foreground: '0 0% 98%'
				},
				muted: {
					DEFAULT: '240 5% 10%',
					foreground: '240 5% 70%'
				},
				accent: {
					DEFAULT: '320 100% 65%',
					foreground: '0 0% 0%'
				},
				popover: {
					DEFAULT: '240 10% 5%',
					foreground: '0 0% 98%'
				},
				card: {
					DEFAULT: '240 8% 8%',
					foreground: '0 0% 98%'
				},
				sidebar: {
					DEFAULT: '240 10% 3.9%',
					foreground: '0 0% 98%',
					primary: '280 100% 70%',
					'primary-foreground': '0 0% 0%',
					accent: '240 5% 10%',
					'accent-foreground': '0 0% 98%',
					border: '240 5% 20%',
					ring: '280 100% 70%'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'bounce-slow': 'bounce-slow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;