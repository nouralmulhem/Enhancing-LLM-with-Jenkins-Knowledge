import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define your custom theme
const theme = responsiveFontSizes(
  createTheme({
    typography: {},
    palette: {
      mode: "dark",
    },
  })
);

export default theme;
