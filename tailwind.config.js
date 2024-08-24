/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        code:['Code']
      },

      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 5s linear infinite",
      },

    },
  },
  plugins: [],
}

