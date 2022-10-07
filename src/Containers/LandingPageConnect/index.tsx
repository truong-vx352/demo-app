import React from "react";
import Images from "../../Theme/Images";
import HeaderSection from "../../Components/HeaderSection";
import HeroSection from "./HeroSection";
function LandingPage() {
  console.log(Images);
  return (
    <div className="body__container">
      <HeaderSection />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
