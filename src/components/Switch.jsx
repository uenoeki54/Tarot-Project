import React from 'react';
import { ThemeContext } from '../pages/Home';
function Switch() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button className="switch" onClick={toggleTheme}>
      <h1>{theme + ' Theme'}</h1>
    </button>
  );
}

export default Switch;
