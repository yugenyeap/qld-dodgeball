/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        qda: {
          maroon: {
            50: '#fff1f3',
            100: '#ffe4e8',
            200: '#fecdd6',
            300: '#fda4b3',
            400: '#fb718a',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#9f1239',
            800: '#6b0f1a',
            900: '#4a0711',
            950: '#2a0207',
          },
          ink: '#0b0b10',
          paper: '#ffffff',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.18)',
        ring: '0 0 0 1px rgba(255,255,255,0.08) inset',
      },
      backgroundImage: {
        'stadium-glow':
          'radial-gradient(1200px 500px at 20% 10%, rgba(107, 15, 26, 0.26), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(159, 18, 57, 0.18), transparent 60%)',
        'grain':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

