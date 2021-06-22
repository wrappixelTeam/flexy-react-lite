import { NAVBAR_BG, SIDEBAR_BG } from "../constants";

export const setNavbarBg = (payload) => {
  return {
    type: NAVBAR_BG,
    payload,
  };
};

export const setSidebarBg = (payload) => {
  return {
    type: SIDEBAR_BG,
    payload,
  };
};
