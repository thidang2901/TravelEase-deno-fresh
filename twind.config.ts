import { Options } from "$fresh/plugins/twind.ts";
import { autoDarkColor } from "@twind/core";
import * as colors from "twind/colors";

export default {
  rules: [
    ["hidden", { display: "none" }],
  ],
  theme: {
    fontFamily: {
      sans: ["Geologica", "sans-serif"],
    },
    colors: {
      primary: "#0074D9",
      secondary: "#9EDFFF",
      accent: "#00BFFF",
      neutral: "#F5F8FA",
    },
    extend: {
      colors,
    },
  },
  selfURL: import.meta.url,
  darkColor: autoDarkColor,
} as Options;
