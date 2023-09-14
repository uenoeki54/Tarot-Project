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
            <Link to="./Card/00">0</Link>
          </li>

          <li>
            <Link to="./Card/01">I</Link>
          </li>

          <li>
            <Link to="./Card/02">II</Link>
          </li>

          <li>
            <Link to="./Card/03">III</Link>
          </li>
          <li>
            <Link to="./Card/04">IV</Link>
          </li>
          <li>
            <Link to="./Card/05">VI</Link>
          </li>
          <li>
            <Link to="./Card/06">VII</Link>
          </li>
          <li>
            <Link to="./Card/07">VIII</Link>
          </li>
          <li>
            <Link to="./Card/08">Ⅸ</Link>
          </li>
          <li>
            <Link to="./Card/09">X</Link>
          </li>
          <li>
            <Link to="./Card/10">XI</Link>
          </li>
          <li>
            <Link to="./Card/11">XII</Link>
          </li>
        </ul>
      </Collapse>
    </div>
  );
}

export default Aside;
