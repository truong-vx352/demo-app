import React from "react";
import { Wrapper } from "./styles";
import { Typography, Box } from "@mui/material";
const HeroSection = () => {
  return (
    <Wrapper>
      <Box className="header__title">
        <Typography variant="h1">Shopdi Connect</Typography>
        <Typography variant="h1" style={{ fontWeight: 400 }}>
          Lợi nhuận khủng không giới hạn!{" "}
        </Typography>
      </Box>
      <Typography variant="body1" className="header__desc">
        Nhận ngay lợi nhuận lên tới 25% không giới hạn khi giới thiệu thành công
        người dùng click xem giá bí mật và giá giảm không giới hạn tại Shopdi.
        Giới thiệu càng nhiều, thu nhập càng khủng
      </Typography>
    </Wrapper>
  );
};

export default HeroSection;
