import styled from "@emotion/styled";
import { Box } from "@mui/material";
export const Wrapper = styled(Box)(() => ({
  "& .ranking_image-wrapper": {
    padding: "0 16px 64px",
    "& > img": {
      width: "100%",
      height: "auto",
    },
  },
  "& .ranking__tab-wrapper": {
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: 600,
    "& button": {
      color: "#858585",
      padding: "8px 12px",
      minHeight: "unset",
      textTransform: "none",
    },
    "& button.Mui-selected": {
      background: "rgba(253, 209, 22, 0.4)",
      color: "#222631",
    },
  },
}));
