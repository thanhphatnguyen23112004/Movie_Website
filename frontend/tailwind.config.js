import { Backpack } from 'lucide-react';
import { text } from 'stream/consumers';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'var(--bg-primary)',
				foreground: 'var(--text-primary)',
				'background-secondary': 'var(--bg-secondary)',
				text: 'var(--text-primary)',
				primary: {
					DEFAULT: 'var(--theme-color-primary)',
					foreground: 'var(--text-primary)',
				},
				secondary: {
					DEFAULT: 'var(--theme-color-secondary)',
					foreground: 'var(--text-primary)',
				},
				accent: {
					DEFAULT: 'var(--accent-primary)',
					foreground: 'var(--text-primary)',
				},
				muted: {
					DEFAULT: 'var(--bg-secondary)',
					foreground: 'var(--theme-color-secondary)',
				},
				border: 'var(--border)',
				input: 'var(--border)',
				ring: 'var(--accent-primary)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
