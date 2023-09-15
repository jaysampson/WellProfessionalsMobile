/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#AF5E41",
        "orange-20": "#CD760F",
        "black-50": "#2C3131",
        "dark-blue": "#1E1D2F",
        "gray-20": "#A9A9A9",
        "yellow-20": "#FAE26A",
      },
      // backgroundImage: (theme) => ({
      //   "bgImg-onboarding": require("./assets/images/bg-img.png"),
      // }),
      fontFamily: {
        "sans": ["PlusSemiBold"],
        "sans-regular": ["Plusregular"],
        "sans-extraBold": ["PlusExtraBold"],
      },
    },
  },
  plugins: [],
};

