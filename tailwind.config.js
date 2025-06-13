/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0B0B1E',
        'space-light': '#1A1B4B',
        'accent-primary': '#7C3AED',
        'accent-secondary': '#60A5FA',
        'text-primary': '#F3F4F6',
      },
      backdropBlur: {
        'glass': '8px',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom right, #0B0B1E, #1A1B4B)',
      },
      animation: {
        'meteor': 'meteor linear var(--duration, 9s) infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
    },
  },
  plugins: [],
}
