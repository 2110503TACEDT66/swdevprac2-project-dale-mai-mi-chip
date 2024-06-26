import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customOrangeStart: '#FF7A00',
        customOrangeEnd: '#FFDEB6',
        subPageStart : '#ff423a',
        subPageEnd : '#fec338'
      }, // Added missing curly brace
    }, // Added missing curly brace
  },
  plugins: [],
};

export default config;
