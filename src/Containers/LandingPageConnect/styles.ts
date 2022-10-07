import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Images from "../../Theme/Images";
export const Wrapper = styled(Box)(() => ({
  "& .hero-section__wrapper": {
    backgroundImage: `url(${Images.background_sp})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@media (min-width: 720px)": {
      backgroundImage: `url(${Images.background_pc})`,
    },
  },
}));
