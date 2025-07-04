import type { Config } from "tailwindcss";

import colors from "./src/styles/colors";
import typography from "./src/styles/typography";

const config: Config = {
  darkMode: "class",
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors,
      fontSize: typography,
      fontFamily: {
        sans: ["'Noto Sans KR'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
