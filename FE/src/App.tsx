import React from "react";
import Pages from "./pages/Pages";
import { IsDarkThemeProvider } from "./contexts/useIsDarkTheme";

function App() {
  return (
    <React.StrictMode>
      <IsDarkThemeProvider>
        <Pages />
      </IsDarkThemeProvider>
    </React.StrictMode>
  );
}

export default App;
