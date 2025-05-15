// Content.js
import { useTheme } from './ThemeProvider';
import { ToggleButton } from './ToggleButton';

export function Content() {
  const { isDarkMode } = useTheme();
  
  return (
    <div style={{ 
      background: isDarkMode ? 'black' : 'white',
      color: isDarkMode ? 'white' : 'black'
    }}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <ToggleButton />
    </div>
  );
}