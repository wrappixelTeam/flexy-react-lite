import { NAVBAR_BG, SIDEBAR_BG } from "../constants";

const INIT_STATE = {
  activeDir: "ltr",
  activeNavbarBg: "#0b70fb", // This can be any color,
  activeSidebarBg: "#ffffff", // This can be any color
  activeTheme: "LIGHT_THEME",
  SidebarWidth: 240,
};

const CustomizerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case NAVBAR_BG:
      return {
        ...state,
        activeNavbarBg: action.payload,
      };
    case SIDEBAR_BG:
      return {
        ...state,
        activeSidebarBg: action.payload,
      };

    default:
      return state;
  }
};

export default CustomizerReducer;
