import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#40916C',
        'mountain-mist': '#E8EDF2',
        gold: '#F0C040',
        'deep-indigo': '#2D2D6B',
        'torii-red': '#C0392B',
        cream: '#FAFAF8',
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2D2D6B 0%, #40916C 50%, #C0392B 100%)',
        'card-gradient': 'linear-gradient(180deg, #FAFAF8 0%, #E8EDF2 100%)',
      },
    },
  },
  plugins: [],
}
export default config
