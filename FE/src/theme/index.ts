import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define your custom theme
const theme = responsiveFontSizes(
  createTheme({
    typography: {},
    palette: {
      mode: "dark",
      primary: {
        main: "#f50057",
      },
      secondary: {
        main: "#000000",
      },
    },
  })
);

export default theme;
