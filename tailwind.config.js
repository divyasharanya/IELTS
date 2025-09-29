/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          DEFAULT: '#FFFDD0',
          '50': '#FFFEFA',
          '100': '#FFFEF5',
          '200': '#FFFDED',
          '300': '#FFFCE5',
          '400': '#FFFBDD',
          '500': '#FFFDD0',
          '600': '#E6E4BB',
          '700': '#CCCA97',
          '800': '#B3B172',
          '900': '#99984E',
        },
        'olive': {
          DEFAULT: '#808000',
          'light': '#999900',
          'dark': '#666600',
          '50': '#F7F7E6',
          '100': '#EFEFCC',
          '200': '#DFDF99',
          '300': '#CFCF66',
          '400': '#BFBF33',
          '500': '#808000',
          '600': '#737300',
          '700': '#666600',
          '800': '#595900',
          '900': '#4D4D00',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'cream': '0 4px 6px -1px rgba(255, 253, 208, 0.1), 0 2px 4px -1px rgba(255, 253, 208, 0.06)',
        'olive': '0 4px 6px -1px rgba(128, 128, 0, 0.1), 0 2px 4px -1px rgba(128, 128, 0, 0.06)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}