import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 700,
              fontSize: "96px"
            },
            h2: {
              fontWeight: 600,
              fontSize: "82px"
            },
            h3: {
              fontWeight: 500,
              fontSize: "65px"
            },
            p: {
              fontSize: "20px"
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
};
export default config;
