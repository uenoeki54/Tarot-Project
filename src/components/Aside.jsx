import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from './Collapse/Collapse';
import ids from '.././assets/major.json';
import hexagram from '../assets/unicursal-hexagram22.png';
function Aside() {
  return (
    <div className="menu">
      <Link to="/">Back to Intromission</Link>
      <Collapse title="Major Arcana" size="small">
        <ul className="list">
          {ids.map((id) => (
            <li key={id.id} className="star">
              <Link to={`./Card/${id.id}`}>{id.name}</Link>
            </li>
          ))}
        </ul>
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
