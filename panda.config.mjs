import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xs: '0px',
        mobile: '600px',
        sm: '640px', // keep existing ones
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
