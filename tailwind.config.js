/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'button-glow': 'buttonGlow 2s ease-in-out infinite',
        'tip-fade-in': 'tipFadeIn 0.3s ease-out forwards',
        'fade-up': 'fade-up 0.3s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        buttonGlow: {
          '0%, 100%': { 
            'box-shadow': '0 0 0 0 rgba(159, 122, 234, 0)',
            '-webkit-box-shadow': '0 0 0 0 rgba(159, 122, 234, 0)',
          },
          '50%': { 
            'box-shadow': '0 0 20px rgba(159, 122, 234, 0.6)',
            '-webkit-box-shadow': '0 0 20px rgba(159, 122, 234, 0.6)',
          },
        },
        tipFadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translate(-50%, 10px)',
            '-webkit-transform': 'translate(-50%, 10px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(-50%, 0)',
            '-webkit-transform': 'translate(-50%, 0)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-2px)'
          },
        }
      },
    },
  },
  plugins: [],
} 