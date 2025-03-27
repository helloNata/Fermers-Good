import React from "react";
import {LogoIcon} from "../../icons";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoIcon />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoIcon />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
