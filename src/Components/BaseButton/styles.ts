import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Wrapper = styled(Button)(() => ({
  padding: "12px 24px",
  color: "black",
  borderRadius: "5px",
  fontSize: "16px",
  "@media (min-width: 720px)": {
    fontSize: "18px",
    padding: "16px 32px",
  },
}));
