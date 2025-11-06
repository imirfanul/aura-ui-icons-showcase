import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0b0f14" },
        card: { DEFAULT: "#0f141a" },
        border: { DEFAULT: "#1f2a36" },
        text: { DEFAULT: "#e8eef5", muted: "#9fb6d4" },
        brand: { DEFAULT: "#60a5fa" },
      },
    },
  },
  plugins: [],
} satisfies Config;
