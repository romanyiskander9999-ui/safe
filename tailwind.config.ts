import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D9E75',
        'primary-dark': '#16a34a',
        secondary: '#06B6D4',
        'secondary-light': '#f7f9f8',
        'secondary-lighter': '#e6f7f4',
      },
      borderRadius: {
        card: '16px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
