/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#D92D20',
        'primary-dark': '#8F1717',
        'primary-intense': '#E3261E',
        'carbon-black': '#1F1F1F',
        'light-gray': '#F3F3F3',
        'border-color': '#E5E5E5'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}

