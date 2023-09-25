import React from 'react';
import ThemeSwitcher from './Themeswitcher';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'light' ? '#007bff' : 'black',
    color: theme === 'light' ? 'white' : '#fff',
    padding: '20px 0',
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
        Task Manager App
      </h1>
      <div style={switcherStyle}>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
