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
    fontWeight: {
      thin: 100,
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extrablack: 950,
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
