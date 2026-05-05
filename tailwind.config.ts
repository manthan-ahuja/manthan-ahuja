import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        slate: '#334155',
        cloud: '#f8fafc',
        accent: '#0ea5e9',
        accentSoft: '#e0f2fe'
      },
      boxShadow: {
        glow: '0 0 40px rgba(14, 165, 233, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
