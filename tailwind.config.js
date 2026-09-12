/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background, #F8FAFC)',
        foreground: 'var(--foreground, #0F172A)',
        card: 'var(--card, #FFFFFF)',
        'card-foreground': 'var(--card-foreground, #0F172A)',
        primary: {
          DEFAULT: 'var(--primary, #6366F1)',
          foreground: 'var(--primary-foreground, #FFFFFF)',
        },
        muted: {
          DEFAULT: 'var(--muted, #F1F5F9)',
          foreground: 'var(--muted-foreground, #64748B)',
        },
        border: 'var(--border, #E2E8F0)',
        'green-light': 'var(--green-light, #F0FDF4)',
        'green-soft': 'var(--green-soft, #16A34A)',
        'red-soft': 'var(--red-soft, #EF4444)',
        'amber-soft': 'var(--amber-soft, #F59E0B)',
        'indigo-soft': 'var(--indigo-soft, #6366F1)',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        floating: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
      },
    },
  },
  plugins: [],
};
