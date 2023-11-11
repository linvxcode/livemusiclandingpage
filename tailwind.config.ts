import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        loop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'looping-tag': 'loop 50s linear infinite',
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#F2F2F2",
        },
      },
    },
  })]
}
export default config
