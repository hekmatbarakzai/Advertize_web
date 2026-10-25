import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { gold: "#D4AF37", ink: "#08090D" }, fontFamily: { sans: ["Inter", "Vazirmatn", "system-ui", "sans-serif"] } } },
  plugins: []
};
export default config;
