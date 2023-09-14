import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from './Collapse/Collapse';
function Aside() {
  return (
    <div className="menu">
      <Link to="/"> home </Link>
      <Collapse title="Arcana" size="small">
        <ul>
          <li>
            <a>0</a>
          </li>

          <li>
            <a>I</a>
          </li>

          <li>
            <a>II</a>
          </li>

          <li>
            <a>III</a>
          </li>
        </ul>
      </Collapse>
    </div>
  );
}

export default Aside;
