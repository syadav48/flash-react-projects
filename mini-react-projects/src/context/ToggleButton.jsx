// ToggleButton.js

import { useTheme } from "./ThemeProvider";

export function ToggleButton() {
  const { toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}