/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightestBg: "#EDEDED",
        light: "#F5F5F5",
        lightDarkBg: "#d7d7d7",
        darkGrey: "#121212",
        lightGrey: "#BDBDBD",
        lightestGrey: "#232323",
        dark: "#0F0F0F",
        primary: "#FD7235",
      },
      padding: {
        sectionTop: "50px",
        sectionBottom: "75px",
        sectionSides: "10rem",
        sectionSidesMobile: "2rem",
      },
      screens: {
        mm: "320px",
        m: "375px",
        xs: "480px",
      },
    },
  },
  plugins: [],
}
