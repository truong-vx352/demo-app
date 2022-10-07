import React from "react";
import { Wrapper } from "./styles";
import { Typography, Box, useMediaQuery } from "@mui/material";
import BaseButton from "../../../Components/BaseButton";
import { Colors } from "../../../Theme/Variables";
import Images from "../../../Theme/Images";

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width:719px)');
  return (
    <Wrapper>
      <Box className="header__text-wrapper">
        <Box className="header__title">
          <Typography variant="h1">Shopdi Connect</Typography>
          <Typography variant="h1" fontWeight={400} className="is-hidden--PC">
            Lợi nhuận khủng không giới hạn!{" "}
          </Typography>
        </Box>
        <Typography variant="body1" className="header__desc">
          {isMobile ?
            `Nhận ngay lợi nhuận lên tới 25% không giới hạn khi giới thiệu thành công
        người dùng click xem giá bí mật và giá giảm không giới hạn tại Shopdi.
        Giới thiệu càng nhiều, thu nhập càng khủng`
            :
            <>
              <span>Từ ngày 01/09/2022, nhận ngay lợi nhuận không giới hạn khi giới thiệu thành công người dùng tải ứng dụng Shopdi.</span>
              <br />
              <span>Giới thiệu bạn bè, nhận thưởng hấp dẫn và lan tỏa giá trị thực đến cộng đồng của bạn`</span>
            </>
          }
        </Typography>
        <Box className="header__hero-btn-wrapper">
          <BaseButton className="header__hero-btn" bold backgroundColor={Colors.primary.main}>
            TRỞ THÀNH SHOPDI CONNECTOR NGAY!
          </BaseButton>
        </Box>
      </Box>
      <Box className="header__hero-logo">
        <img src={Images.hero_img} alt="" />
      </Box>
    </Wrapper >
  );
};

export default HeroSection;
