import { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextValue = {
  text: string;
  handleUpdate: (text: string) => void;
};

const PersonalizationContext = createContext<ContextValue>({
  text: "",
  handleUpdate: () => {},
});

export function PersonalizationProvider({ children }: ProviderProps) {
  const [text, setText] = useState("");

  const handleUpdate = (text: string) => {
    setText(text);
  };

  return (
    <PersonalizationContext.Provider value={{ text, handleUpdate }}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  return useContext(PersonalizationContext);
}
