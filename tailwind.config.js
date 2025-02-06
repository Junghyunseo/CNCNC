/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#3b82f6", // 기본 primary 색상 (Tailwind의 blue-500)
            light: "#60a5fa",  // 밝은 톤 (blue-400)
            dark: "#1e40af",   // 어두운 톤 (blue-900)
          },
        },
      },
    },
    plugins: [],
  };