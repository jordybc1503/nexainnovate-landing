import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22C55E',
          50:'#ecfdf5', 100:'#d1fae5', 200:'#a7f3d0', 300:'#6ee7b7', 400:'#34d399', 500:'#22C55E', 600:'#16a34a', 700:'#15803d', 800:'#166534', 900:'#14532d'
        },
        bgBase: '#0A0A0A',
        bgSoft: '#0f1115',
        textPrimary: '#F3F4F6',
        textMuted: '#9CA3AF'
      },
      fontFamily: {
        display: ['var(--font-poppins)'],
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.35)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: [typography]
} satisfies Config

