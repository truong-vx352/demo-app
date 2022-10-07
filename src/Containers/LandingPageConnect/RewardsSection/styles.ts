import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Images from "../../../Theme/Images";
export const Wrapper = styled(Box)(() => ({
  paddingTop: "70px",
  "& .rewards__title": {
    paddingTop: "16px",
    color: "#222631",
  },
  "& .rewards__notice": {
    paddingTop: "16px",
    fontSize: "14px",
    lineHeight: "27px",
    color: "#333333",
  },
  "& .rewards__ranking": {
    marginTop: "64px",
  },
  "& .rewards__title--second": {
    padding: "64px 0 90px",
  },
}));
