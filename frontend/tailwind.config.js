/** @type {import('tailwindcss').Config} */
export default {
  // The landing page uses TSX while the chat workspace still uses JSX.
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
