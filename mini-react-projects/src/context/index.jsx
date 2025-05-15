// App.js
import { Content } from './Content';
import { ThemeProvider } from './ThemeProvider';


function ThemeGiver() {
  return (
    <ThemeProvider>
        <Content />
    </ThemeProvider>
  );
}
export default ThemeGiver;