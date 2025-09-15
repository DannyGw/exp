import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(0 0% 100%)',
          dark: 'hsl(222.2 84% 4.9%)'
        },
        foreground: {
          DEFAULT: 'hsl(222.2 84% 4.9%)',
          dark: 'hsl(210 40% 98%)'
        },
        primary: {
          DEFAULT: '#6D28D9',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: 'hsl(210 40% 96%)',
          dark: 'hsl(217.2 32.6% 17.5%)'
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};

export default config;
