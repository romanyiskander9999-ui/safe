module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D9E75',
        secondary: {
          light: '#f7f9f8',
          lighter: '#f0f4f2',
        },
        status: {
          safe: '#10b981',
          monitor: '#f59e0b',
          blocked: '#ef4444',
        },
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
}