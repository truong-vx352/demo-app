import React from "react";
import Images from "../../Theme/Images";
import HeaderSection from "../../Components/HeaderSection";
import HeroSection from "./HeroSection";
import RewardsSection from "./RewardsSection";
import { Wrapper } from './styles'
import { Box } from '@mui/material'
function LandingPage() {
  return (
    <Wrapper>
      <Box className="hero-section__wrapper">
        <Box className="body__container">
          <HeaderSection />
          <HeroSection />
        </Box>
      </Box>
      <Box className="body__container">
        <RewardsSection />
      </Box>
    </Wrapper>
  );
}

export default LandingPage;
