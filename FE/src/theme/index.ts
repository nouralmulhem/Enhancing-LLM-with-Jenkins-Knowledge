import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define light theme
const lightTheme = responsiveFontSizes(
  createTheme({
    typography: {},
    palette: {
      mode: "light",
      primary: {
        main: "#bdbdbd",
        light: "#ecedf2",
        dark: "#676767",
      },
      secondary: {
        main: "#003b6d",
        light: "#669acc",
      },
      text: {
        primary: "#000000",
        secondary: "#ffffff",
      },
    },
  })
);

// Define dark theme
const darkTheme = responsiveFontSizes(
  createTheme({
    typography: {},
    palette: {
      mode: "dark",
      primary: {
        main: "#f50057",
        dark: "#f50057",
      },
      secondary: {
        main: "#000000",
      },
      text: {
        primary: "#ffffff",
        secondary: "#000000",
      },
    },
  })
);

export { lightTheme, darkTheme };
