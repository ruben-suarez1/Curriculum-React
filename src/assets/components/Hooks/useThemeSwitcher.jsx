import { useState, useEffect, useRef } from 'react';

function useThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('selected-theme') || 'light');
  const [currentIcon, setCurrentIcon] = useState(localStorage.getItem('selected-icon') || 'bx-sun');

  const themeButtonRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    
    if (themeButtonRef.current) {
      themeButtonRef.current.classList.toggle('bx-moon', currentIcon === 'bx-moon');
      themeButtonRef.current.classList.toggle('bx-sun', currentIcon === 'bx-sun');
    }
  }, [currentTheme, currentIcon]);

  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const newIcon = currentIcon === 'bx-moon' ? 'bx-sun' : 'bx-moon';
    
    setCurrentTheme(newTheme);
    setCurrentIcon(newIcon);
    
    localStorage.setItem('selected-theme', newTheme);
    localStorage.setItem('selected-icon', newIcon);
  };

  return { themeButtonRef, currentTheme, currentIcon, handleThemeToggle };
}

export default useThemeSwitcher;
