import styled from "@emotion/styled";
import { Box } from "@mui/material";
export const Wrapper = styled(Box)(() => ({
  "& .ranking_image-wrapper": {
    padding: "0 16px 64px",
    maxWidth: "445px",
    margin: "auto",
    "& > img": {
      width: "100%",
      height: "auto",
    },
  },
}));
