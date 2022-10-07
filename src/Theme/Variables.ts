/**
 * Colors
 */
export const Colors = {
  primary: {
    main: "#FDD116",
  },
  black: {
    main: "#000000",
    "900": "#1a1a1a",
    "800": "#333333",
    "700": "#4d4d4d",
    "600": "#666666",
    "500": "#999999",
    "400": "#b3b3b3",
    "300": "#cccccc",
    "200": "#e6e6e6",
    "100": "#f2f2f2",
  },
  white: {
    main: "#ffffff",
  },
  text: {
    primary: "rgba(0,0,0,0.9)",
    secondary: "#242424",
    sub: "rgba(0,0,0,0.6)",
    da: "rgba(0,0,0,0.3)",
    title: "#030303",
    white: "rgba(255,255,255,0.9)",
    text_disabled: "#a1a1a1",
    hightlight: "#007BFF",
  },
  scrollBar: {
    main: "#c1c1c1",
  },

  alart: {
    error: "#ff1100",
    warning: "#ffe400",
    success: "#00995e",
    infor: "#0041BF",
    bg_disabled: "#ededed",
  },
};

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

export const breakpointValues = {
  xs: 0,
  sm: 414 /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */,
  md: 720 /* smartphones, Android phones, landscape iPhone */,
  lg: 960 /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */,
  xl: 1167 /* hi-res laptops and desktops */,
};

export default {
  Colors,
  FontSize,
  breakpointValues,
};
