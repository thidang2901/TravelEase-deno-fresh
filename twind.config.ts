import { Options } from "$fresh/plugins/twind.ts";
import { autoDarkColor } from "@twind/core";
import * as colors from "twind/colors";
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica, sans-serif",
        "geologica": '"Geologica"',
      },
    },
  },
  colors: {
    primaryColor: "#0074D9",
    secondaryColor: "#9EDFFF",
    accentColor: "#00BFFF",
    neutralColor: "#F5F8FA",
  },
  extend: {
    colors,
  },
  selfURL: import.meta.url,
  darkColor: autoDarkColor,
  preflight: {
    // Import external stylesheet
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&display=swap')`,
  },
} as Options;
