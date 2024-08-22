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
          "100%": { transform: "translateX(-168%)" },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },

    },
  },
  plugins: [],
}

