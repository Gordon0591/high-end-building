/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sika-yellow': '#FFD100',
        'sika-yellow-light': '#FFE44D',
        'sika-yellow-dark': '#E6BC00',
        'sika-gray': '#4A4A4A',
        'sika-gray-light': '#888888',
        'sika-gray-lighter': '#B0B0B0',
        'sika-green': '#7CB342',
        'sika-green-light': '#9CCC65',
        'sika-green-dark': '#689F38',
        'sika-bg': '#FAFAFA',
        'sika-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with antd
  },
};
