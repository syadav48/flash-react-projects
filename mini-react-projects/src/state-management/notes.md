# State Management: Context API vs Redux vs Zustand

This document provides an overview of three popular state management solutions in React: Context API, Redux, and Zustand. It discusses when to use each and provides basic examples.

## 1. Context API

### Description
The Context API is a built-in feature of React that allows you to share state across components without having to pass props down manually at every level.

### When to Use
- For simple state management needs.
- When you want to avoid prop drilling.
- For small to medium-sized applications.

### Example
```jsx
import React, { createContext, useContext, useState } from 'react';

// Create a Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemedComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>Current theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    );
};

// Usage
const App = () => (
    <ThemeProvider>
        <ThemedComponent />
    </ThemeProvider>
);