import { createTheme } from "@mui/material";
import Inconsolata from "../fonts/Inconsolata/static/Inconsolata_UltraExpanded-Black.ttf";
import Epilogue from "../fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFAF8",
    },
    primary: {
      main: "#4F772D",
    },
    secondary: {
      main: "#6A994E",
    },
    error: {
      main: "#BC4749",
    },
  },
  typography: {
    fontFamily: ["Inter",'sans-serif'].join(','),
    fontSize: 16,
    
    title:{
      fontFamily:"Inconsolata UltraExpanded",
      fontSize:"96px",
      fontWeight:900
    },
    h1: {
      color: "#3A00B5",
      fontSize: "64px",
      fontWeight: 700,
    },
    h2: {
      color: "#3A00B5",
      fontSize: "40px",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Cormorant Garamond",
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: 500
    },
    h4: {
      color: "#8A82BD",
      fontSize: 24,
      fontWeight: 500,
    },
    b1: {
      color: "#3A00B5",
      fontSize: 24,
    },
    caption:{
      color:"#8A82BD",
      fontSize: "16px",
    },
    navbar:{
      color:"#000000",
      fontFamily:["Proza Libre", "sans-serif"].join(","),
      fontSize: "16px",
      fontWeight: 900
    },
    bullets:{
      color: "#3A00B5",
      fontSize: "28px",
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#FFF9EC",
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          background: "#FFF9EC",
        },
      },
    },
  },
});

export default theme;
