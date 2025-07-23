import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1304px',
    },
    colors: {
      primary: '#2627',
      secondary: '#383A3D',
      tertiary: '#ccc',
    },
    fontSize: {
      // h1: [
      //   '32px',
      //   {
      //     fontWeight: '850',
      //     lineHeight: '58px',
      //   },
      // ],
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
