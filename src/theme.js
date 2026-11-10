import React, { createContext, useContext, useState } from 'react';

// Exact color tokens extracted from Book App Concept Figma AST (file.json)
export const colors = {
  primary: '#555FB2',         // Deep Indigo / Purple
  primaryDark: '#444C91',
  coral: '#FD6E8D',           // Warm Pink / Coral Accent
  accentYellow: '#FFD562',    // Warm Gold
  accentPeach: '#FF9B82',     // Peach tone
  background: '#F8E8E9',      // Soft tinted canvas background from design
  card: '#FFFFFF',            // Card surface
  dark: '#242424',            // Primary dark text
  textMuted: '#848E9A',       // Subtext gray
  border: '#F1F1F1',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const palettes = {
  light: {
    bg: '#F8E8E9',
    card: '#FFFFFF',
    text: '#242424',
    subText: '#848E9A',
    border: '#EAEAEA',
    navBg: '#FFFFFF',
  },
  dark: {
    bg: '#1A1820',
    card: '#24212D',
    text: '#FFFFFF',
    subText: '#A0ACBF',
    border: '#332E40',
    navBg: '#201D28',
  },
};

const ThemeContext = createContext({
  theme: palettes.light,
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? palettes.dark : palettes.light;
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
