/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A5DC8',
        accent: '#E91E90',
        dark: '#1A1A1A',
        light: '#D6E8F7',
        success: '#16A34A',
      },
      fontSize: {
        body: ['18px', { lineHeight: '1.7' }],
      },
      spacing: {
        touch: '48px',
        'touch-lg': '56px',
      },
    },
  },
  plugins: [],
};
