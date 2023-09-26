import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
  height: '24px', 
  width: '24px', 
  paddingRight: '18px', 
};

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center',background:"transparent" }}>
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} style={iconStyle} /> : <FontAwesomeIcon icon={faSun} style={iconStyle} />}
    </button>
  );
};

export default ThemeSwitcher;
