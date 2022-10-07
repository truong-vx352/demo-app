import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  "& .logo__wrapper": {
    width: "112.4px",
    "& > img": {
      width: "100%",
      height: "auto",
    },
  },
}));
