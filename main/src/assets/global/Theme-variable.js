import _ from "lodash";
import { createTheme } from "@material-ui/core/styles";
import typography from "./Typography";
import shadows from "./Shadows";

import { LIGHT_THEME } from "../../redux/constants";

// ##############################

// // // Global Variables
// ##############################

const SidebarWidth = 265;
const TopbarHeight = 70;
const primaryColor = "#1e4db7";
const warningColor = "#fec90f";
const dangerColor = "#fc4b6c";
const successColor = "#39cb7f";
const infoColor = "#0bb2fb";
const lightColor = "#f1f9ff";
const darkColor = "#3c414c";
const mutedColor = "#99abb4";
const lightinfoColor = "#e6f4ff";
const lightwarningColor = "#fff4e5";
const lightdangerColor = "#fdf3f5";
const lightsuccessColor = "#ebfaf2";
const lightprimaryColor = "#ddebff";

const baseTheme = {
  direction: "ltr",
  palette: {
    primary: {
      main: "#1a97f5",
    },
    secondary: {
      main: "#1e4db7",
    },
    background: {
      default: "#fff",
    },
    success: {
      main: "#00ab55",
    },
    danger: {
      main: "#fc4b6c",
    },
    error: {
      main: "#fc4b6c",
    },
    warning: {
      main: "#fdd43f",
    },
    text: {
      secondary: "#777e89",
      danger: "#fc4b6c",
    },
  },
  shape: {
    borderRadius: 5,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
          margin: 0,
          padding: 0,
        },
        "#root": {
          height: "100%",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "15px !important",
          paddingRight: "15px !important",
          maxWidth: "1600px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "9px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          padding: "14px",
          margin: "15px",
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "40px",
        },
      },
    },

    MuiGridItem: {
      styleOverrides: {
        root: {
          paddingTop: "30px",
          paddingLeft: "30px !important",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#ecf0f2",
          borderRadius: "6px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: "0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
  },
  mixins: {
    toolbar: {
      color: "#949db2",
      "@media(min-width:1280px)": {
        minHeight: TopbarHeight,
        padding: "0 30px",
      },
      "@media(max-width:1280px)": {
        minHeight: "64px",
      },
    },
  },
  status: {
    danger: "#e53e3e",
  },
  typography,
  shadows,
};

const themesOptions = [
  // Light theme options
  {
    name: LIGHT_THEME,
    palette: {
      mode: "light",
    },
    background: {
      default: "#282C34",
      dark: "#1c2025",
      paper: "#282C34",
    },
  },
];

export const BuildTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(
    _.merge({}, baseTheme, themeOptions, { direction: config.direction })
  );
  return theme;
};

export {
  primaryColor,
  TopbarHeight,
  SidebarWidth,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  lightColor,
  darkColor,
  mutedColor,
  lightinfoColor,
  lightwarningColor,
  lightdangerColor,
  lightsuccessColor,
  lightprimaryColor,
};
