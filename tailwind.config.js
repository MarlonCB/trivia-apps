module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
  },
  plugins: [],
}
