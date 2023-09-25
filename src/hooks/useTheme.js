import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  // Function to retrieve the initial theme from local storage
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; 
  }

  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Effect to initialize the theme
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
  }, []);

  // Effect to apply the theme class to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};
