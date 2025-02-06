/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],  // ✅ content 배열 최신화!
    theme: {
      extend: {},
    },
    safelist: [
      "text-[22px]", 
      "text-[#60A5FA]", 
      "w-[100px]", 
      "p-[12px]"
    ],
  };
  