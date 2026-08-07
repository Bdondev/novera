/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        oxblood: "#520000",
        vermilion: "#c80d19",
        porcelain: "#f7f5f2",
        ink: "#11100f"
      },
      maxWidth: {
        storefront: "1280px"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica Neue", "sans-serif"]
      },
      boxShadow: {
        nav: "0 8px 30px rgb(0 0 0 / 0.10)"
      }
    }
  },
  plugins: []
};
