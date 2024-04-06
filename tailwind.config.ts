import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      // container: {
      //   center: true,
      //   padding: '2rem',
      //   screens: {
      //     '2xl': '1400px'
      //   }
      // },
      colors: {
        logo: '#004aad',
        primary: '#0f294c',
        secondary: '#000f24', //'#001634'
        accent: '#fdba1e'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'slide-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0%)' }
        },
        'slide-up': {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' }
        }
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config;

export default config;
