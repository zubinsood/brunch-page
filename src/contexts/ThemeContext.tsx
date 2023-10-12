import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isToggled: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isToggled, setIsToggled] = useState(false);
  
    const toggleTheme = () => {
      setIsToggled(!isToggled);
    };

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', isToggled ? 'dark' : 'light');
    }, [isToggled]);
  
    return (
      <ThemeContext.Provider value={{ isToggled, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};