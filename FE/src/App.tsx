import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { routes, RouteSchema } from "./routes";
import theme from "./theme";

function App() {
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
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/landing" />} />
        </Routes>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
