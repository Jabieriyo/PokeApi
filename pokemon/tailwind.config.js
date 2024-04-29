/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'dark-cyan': 'hsl(185, 75%, 39%)',
          'very-dark-desaturated': 'hsl(229, 23%, 23%)',
          'dark-grayish-blue': 'hsl(227, 10%, 46%)',
          'dark-gray': 'hsl(0, 0%, 59%)',
        }
      },
      backgroundImage: {
        'fondo-tarjeta': "url('.\src\img\bg-pattern-card.svg')",
        'fondo': "url('.\src\img\bg-pattern-bottom.svg')"
      }
    },
  },
  plugins: [],
}
