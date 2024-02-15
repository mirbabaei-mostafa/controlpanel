/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "dark-primary": "#303838",
        "dark-secondary": "#4c5959",
      },
    },

    fontFamily: {
      title: ["Protest Strike"],
      headline: ["Ubuntu"],
      sans: ["Open Sans"],
      roboto: ["Roboto"],
      fredoka: ["Fredoka"],
      body: ["Roboto"],
    },
  },
  plugins: [],
};
