/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f6f4',
          100: '#e7ece7',
          200: '#d1dad1',
          300: '#aabfaa',
          400: '#7b9b7a',
          500: '#5d7f5c',
          600: '#486547',
          700: '#3a5139',
          800: '#314131',
          900: '#2a362a',
        },
        cream: {
          DEFAULT: '#f8f5f0',
          light: '#fcfbf9',
          dark: '#f0ece4',
        },
        'muted-blue': {
          DEFAULT: '#a8c0c0',
          light: '#d8e3e3',
          dark: '#7a9a9a',
        },
        'soft-beige': {
          DEFAULT: '#e8e1d9',
          light: '#f5f2ed',
          dark: '#dbd1c5',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)'],
        sans: ['var(--font-poppins)'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
