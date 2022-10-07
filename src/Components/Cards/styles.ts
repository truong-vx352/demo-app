import styled from "@emotion/styled";
import { Box } from "@mui/material";
export const Wrapper = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: '32px',
  "@media (min-width:720px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "60px"
  }
}));
