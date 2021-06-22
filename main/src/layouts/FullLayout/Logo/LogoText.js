import React from "react";
import logotxt from "../../../assets/images/logo-text.png";
import logolighttxt from "../../../assets/images/logo-light-text.png";
import { useSelector } from "react-redux";
const LogoText = (props) => {
  const customizer = useSelector((state) => state.CustomizerReducer);
  return (
    <img alt="Logo" src={customizer.activeTheme === 'LIGHT_THEME' ? logotxt : logolighttxt} {...props} />
    )
  ;};

export default LogoText;
