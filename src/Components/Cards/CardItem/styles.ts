import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { fontWeight } from "@mui/system";
export const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  "& .card-item__img-wrapper": {
    maxWidth: "100%",
    backgroundColor: "#D9D9D9",
    height: "267px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  "& .card-item__content-wrapper": {
    padding: "16px",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    "& .card-item__title": {
      marginBottom: "8px",
      fontSize: "24px",
      lineHeight: "29px",
      fontWeight: "bold",
    },
    "& .card-item__desc": {
      fontSize: "24px",
      lineHeight: "36px",
      flex: "1",
    },
    "& .card-item__footer": {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "16px",
      "& .end-date": {
        fontWeight: "bold",
      },
      "& .link-detail": {
        color: "#2E9DFF",
      },
      "@media (max-width: 719px)": {
        "& > *": {
          fontSize: "16px",
        },
      },
    },
  },
}));
