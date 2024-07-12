import React from "react";
import Pages from "./pages/Pages";
import { IsDarkThemeProvider } from "./contexts/useIsDarkTheme";
import { PersonalizationProvider } from "./contexts/usePersonalization";

function App() {
  return (
    <React.StrictMode>
      <IsDarkThemeProvider>
        <PersonalizationProvider>
          <Pages />
        </PersonalizationProvider>
      </IsDarkThemeProvider>
    </React.StrictMode>
  );
}

export default App;
