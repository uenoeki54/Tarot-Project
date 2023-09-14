import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from './Collapse/Collapse';
function Aside() {
  return (
    <div className="menu">
      <Link to="/">Back to Intromission</Link>
      <Collapse title="Major Arcana" size="small">
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
      </Collapse>
      <Collapse title="Air- Swords" size="small">
        <li>
          <Link to="./Card/11">King/Knight</Link>
        </li>

        <li>
          <Link to="./Card/12">Queen</Link>
        </li>

        <li>
          <Link to="./Card/13">Prince/Knight</Link>
        </li>
        <li>
          <Link to="./Card/14">Princess/Page</Link>
        </li>
        <li>
          <Link to="./Card/101">Ace</Link>
        </li>
        <li>
          <Link to="./Card/102">Two</Link>
        </li>
        <li>
          <Link to="./Card/103">Three</Link>
        </li>
        <li>
          <Link to="./Card/104">Four</Link>
        </li>
        <li>
          <Link to="./Card/105">Five</Link>
        </li>
        <li>
          <Link to="./Card/106">Six</Link>
        </li>
        <li>
          <Link to="./Card/107">Seven</Link>
        </li>
        <li>
          <Link to="./Card/108">Eight</Link>
        </li>
        <li>
          <Link to="./Card/109">Nine</Link>
        </li>
        <li>
          <Link to="./Card/110">Tenth</Link>
        </li>
      </Collapse>
    </div>
  );
}

export default Aside;
