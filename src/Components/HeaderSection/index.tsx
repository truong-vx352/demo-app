import React from "react";
import Images from "../../Theme/Images";
import NavigationBar from "../NavigationBar";
import { Wrapper } from "./styles";

const HeaderSection = () => {
  return (
    <Wrapper>
      <div className="logo__wrapper">
        <img src={Images.logo} alt="" />
      </div>
      <NavigationBar />
    </Wrapper>
  );
};

export default HeaderSection;
