// ThemeContext.js
import { createContext, useState, useContext } from 'react';

// Step 1: Create the context
const ThemeContext = createContext();

// Step 2: Create a provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Create a custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}