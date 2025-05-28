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
				bg: {
					primary: 'var(--bg-primary)',
					secondary: 'var(--bg-secondary)',
					muted: 'var(--bg-muted)',
				},
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)',
				},
				accent: {
					DEFAULT: 'var(--accent-primary)',
					text: 'var(--accent-text)',
				},
				header: {
					bg: 'var(--header-bg)',
					text: 'var(--header-text)',
					border: 'var(--header-border)',
				},
				footer: {
					bg: 'var(--footer-bg)',
					'bg-secondary': 'var(--footer-bg-secondary)',
					text: 'var(--footer-text)',
					heading: 'var(--footer-heading)',
					link: 'var(--footer-link)',
				},
				border: 'var(--border)',
				shadow: 'var(--shadow)',
				state: {
					error: 'var(--error)',
					warning: 'var(--warning)',
					success: 'var(--success)',
				}
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
}
