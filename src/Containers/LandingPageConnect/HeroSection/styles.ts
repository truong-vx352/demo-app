import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  marginTop: "70px",
  marginBottom: "24px",

  "& .header__text-wrapper": {
    "& .header__title": {
      "& > h1:first-child": {
        whiteSpace: "nowrap",
      },
    },
    "& .header__desc": {
      marginTop: "16px",
    },
    "& .header__hero-btn-wrapper": {
      marginTop: "16px",
      display: "flex",
      justifyContent: "center",
    },
  },
  "& .header__hero-logo": {
    marginTop: "55px",
    paddingInline: "16px",
    "& > img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  "@media (min-width: 720px)": {
    display: "flex",
    gap: "2%",
    "& .header__text-wrapper": {
      margin: "auto",
      "& .header__desc": {
        marginTop: "32px",
      },
      "& .header__hero-btn-wrapper": {
        justifyContent: "start",
        marginTop: "32px",
      },
    },
    "& .header__hero-logo": {
      maxWidth: "530px",
      minWidth: "280px",
      marginInline: "auto",
      paddingInline: "unset",
    },
  },
}));
