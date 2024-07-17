import { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextValue = {
  isDarkTheme: boolean;
  handleThemeChange: () => void;
};

const IsDarkThemeContext = createContext<ContextValue>({
  isDarkTheme: false,
  handleThemeChange: () => {},
});

export function IsDarkThemeProvider({ children }: ProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <IsDarkThemeContext.Provider value={{ isDarkTheme, handleThemeChange }}>
      {children}
    </IsDarkThemeContext.Provider>
  );
}

export function useIsDarkTheme() {
  return useContext(IsDarkThemeContext);
}
