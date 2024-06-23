/** @type {import('tailwindcss').Config} */
import pluginAnimate from "tailwindcss-animate";

const config = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class"],
  content: [
    "./src/**/{*.{html,js,jsx}}",
    "./src/**/**/*.{js,jsx}",
    "./src/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        // xl: '100%',
        xl: "1440px",
      },
    },
    fontFamily: {
      inter: ["var(--font-family-inter)"],
      regular: ["var(--font-family-sf_pro-regular)"],
    },
    extend: {
      rounded: {
        15: "15px",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "21px"],
        base: ["16px", "22px"],
        lg: ["18px", "24px"],
        xl: ["22px", "27px"],
      },
      colors: {
        black: "rgb(0,0,0)",
        grey: {
          DEFAULT: "#d1d1d1",
        },
        green: {
          DEFAULT: "rgba(83, 220, 118, 1)",
          dark: "rgba(26, 174, 112, 1)",
        },
        blue: {
          DEFAULT: "#007aff",
        },
        yellow: {
          DEFAULT: "#FFBF1B",
        },
      },
    },
  },
  variants: {},
  plugins: [pluginAnimate],
};

export default config;
