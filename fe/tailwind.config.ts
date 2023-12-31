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
        'bg-image': `url('/bg.png')`
      },
      backgroundColor: {
        'black-custom': 'rgba(0, 0, 0, 0.4)',
      },
      colors: {
        primary: '#38a7ff',
      },
    },
  },
  plugins: [],
}
export default config
