/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "var(--primary-color)",
        primaryH: "var(--primary-h-color)",
        secondary: "var(--secondary-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
        txtD: "var(--txt-def)",
        bgG: "var(--bg-gr)",
        bgT: "var(--bg-table)",
        textT: "var(--text-table)",
        brc: "var(--border-color)",
        grp: "var(--gradient-color-primary)",
        grs: "var(--gradient-color-secondary)",
        btnP: "var(--btn-gr-primary)",
        btnS: "var(--btn-gr-secondary)",
        bgnp: "var(--bg-input)",
        brgr: "var(--border-gr)",
        brl: "var(--border-light)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        'ssm': '.8rem',
      },
    },
  },
  plugins: [],
}

