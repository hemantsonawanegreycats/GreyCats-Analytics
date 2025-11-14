/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    future: {
    disableExperimentalOklch: true,   // 🚫 Turn off OKLCH
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Important
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'var(--border)',
  			ring: 'var(--ring)',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: 'var(--primary)',
  			'primary-foreground': 'var(--primary-foreground)',
  			secondary: 'var(--secondary)',
  			'secondary-foreground': 'var(--secondary-foreground)',
  			accent: 'var(--accent)',
  			'accent-foreground': 'var(--accent-foreground)',
  			destructive: 'var(--destructive)',
  			input: 'var(--input)',
  			muted: 'var(--muted)',
  			'muted-foreground': 'var(--muted-foreground)',
  			card: 'var(--card)',
  			'card-foreground': 'var(--card-foreground)',
  			'chart-1': 'var(--chart-1)',
  			'chart-2': 'var(--chart-2)',
  			'chart-3': 'var(--chart-3)',
  			'chart-4': 'var(--chart-4)',
  			'chart-5': 'var(--chart-5)'
  		},
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
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
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
}
