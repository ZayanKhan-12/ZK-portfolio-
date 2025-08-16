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
			fontFamily: {
				'sora': ['Sora', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'heading': ['Sora', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					pink: 'hsl(var(--neon-pink))',
					blue: 'hsl(var(--neon-blue))',
					green: 'hsl(var(--neon-green))',
					purple: 'hsl(var(--neon-purple))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-cyber': 'linear-gradient(135deg, hsl(200 100% 60%), hsl(280 100% 70%), hsl(320 100% 65%))',
				'gradient-neon': 'linear-gradient(135deg, hsl(280 100% 70%), hsl(320 100% 65%), hsl(340 100% 60%))',
				'gradient-holographic': 'linear-gradient(135deg, hsl(200 100% 60%), hsl(240 100% 70%), hsl(280 100% 70%))',
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'hologram': 'var(--shadow-hologram)',
				'cyber': 'var(--shadow-cyber)',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'holographic-shift': 'holographic-shift 3s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 20s linear infinite',
				'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
				'float-3d': 'float-3d 8s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
				'energy-pulse': 'energy-pulse 0.6s ease-out',
				'scan-line-move': 'scan-line-move 2s linear infinite',
				'data-flow': 'data-flow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
