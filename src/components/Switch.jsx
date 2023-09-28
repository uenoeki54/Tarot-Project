import React from 'react';
import { ThemeContext } from '../index.js';
function Switch() {
  React.useContext({ ThemeContext });
  return (
    <button className="switch">
      <h1>{value} + Theme</h1>
    </button>
  );
}

export default Switch;
