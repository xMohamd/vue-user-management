/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import forms from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui, forms]
};
