import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { routes, RouteSchema } from "../routes";
import { darkTheme, lightTheme } from "../theme";
import { useIsDarkTheme } from "../contexts/useIsDarkTheme";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #f50057;  */
    background: ${(props) => props.theme.palette.primary.main}; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /* background: #f50057;  */
    background: ${(props) => props.theme.palette.primary.main}; 
  }
`;

const Pages = () => {
  const { isDarkTheme } = useIsDarkTheme();

  const getRoutes = (allRoutes: RouteSchema[]) =>
    allRoutes.map((route: RouteSchema) => {
      if (route.route) {
        return (
          <Route
            path={route.route}
            Component={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/landing" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Pages;
