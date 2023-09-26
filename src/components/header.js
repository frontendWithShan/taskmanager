import React from 'react';
import ThemeSwitcher from './Themeswitcher';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme === 'light' ? ' linear-gradient(176deg,#63edbc 0%,#079361 99%)':'linear-gradient(120deg, #000000, #36454f)',
    color: theme === 'light' ? 'white' : '#fff',
    padding: '5px 0',
    width :"70%",
    height:"50px",
    border:"2px solid white",
    borderRadius:"45px"
  };

  const switcherStyle = {
    padding: '5px',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div style={switcherStyle}>
      </div>
      <h1 style={{ margin: '0', fontSize: '24px', flex: 1, textAlign: 'center' }}>
        Task Manager
      </h1>
      <div style={switcherStyle}>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
