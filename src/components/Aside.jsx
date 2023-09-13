import React from 'react';
import { Link } from 'react-router-dom';

function Aside() {
  return (
    <div className="menu">
      <Link to="/"> home </Link>
    </div>
  );
}

export default Aside;
