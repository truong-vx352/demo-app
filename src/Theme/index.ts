import { createTheme } from "@mui/material/styles";
import { breakpointValues, Colors } from "./Variables";

export const theme = createTheme({
  typography: {
    fontFamily: ["QuickSand", "Noto San"].join(","),
    h1: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: "60px",
      [`@media screen and (min-width: ${breakpointValues.md}px)`]: {
        fontSize: 60,
        lineHeight: "72px",
      },
      [`@media screen and (min-width: ${breakpointValues.lg}px)`]: {
        fontSize: 80,
        lineHeight: "88px",
      },
    },
    h2: {
      fontSize: 36,
      fontWeight: 400,
      lineHeight: "48px",
      [`@media screen and (min-width: ${breakpointValues.md}px)`]: {
        fontSize: 48,
        lineHeight: "60px",
      },
      [`@media screen and (min-width: ${breakpointValues.lg}px)`]: {
        fontSize: 60,
        lineHeight: "72px",
      },
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: "38px",
      [`@media screen and (min-width: ${breakpointValues.md}px)`]: {
        fontSize: 32,
      },
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "27px",
    },
    body2: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "22px",
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
      textTransform: "initial",
    },
  },
  breakpoints: {
    values: breakpointValues,
  },
  palette: {
    text: {
      primary: Colors.text["primary"],
      secondary: Colors.text["secondary"],
    },
    primary: {
      main: "#007BFF",
    },
  },
});
