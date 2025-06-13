/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-darker': '#010409',
        'github-border': '#30363d',
        'github-accent': '#2f81f7',
        'github-text': '#c9d1d9',
        'github-secondary': '#8b949e',
        'github-success': '#238636',
        'github-muted': '#21262d',
      },
      backdropBlur: {
        'glass': '8px',
      },
      backgroundImage: {
        'github-gradient': 'linear-gradient(to bottom right, #0d1117, #010409)',
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
