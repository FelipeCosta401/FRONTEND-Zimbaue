/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		screens: {
			xs: '450px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'rgba(var(--background))',
				foreground: 'rgba(var(--foreground))',
				card: {
					DEFAULT: 'rgba(var(--card))',
					foreground: 'rgba(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'rgba(var(--popover))',
					foreground: 'rgba(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'rgba(var(--primary))',
					foreground: 'rgba(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'rgba(var(--secondary))',
					foreground: 'rgba(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'rgba(var(--muted))',
					foreground: 'rgba(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'rgba(var(--accent))',
					foreground: 'rgba(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'rgba(var(--destructive))',
					foreground: 'rgba(var(--destructive-foreground))'
				},
				border: 'rgba(var(--border))',
				input: 'rgba(var(--input))',
				ring: 'rgba(var(--ring))',
				chart: {
					'1': 'rgba(var(--chart-1))',
					'2': 'rgba(var(--chart-2))',
					'3': 'rgba(var(--chart-3))',
					'4': 'rgba(var(--chart-4))',
					'5': 'rgba(var(--chart-5))'
				}
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

