import toteninsel from '../assets/toteninsel400.jpg';
import { useParams } from 'react-router-dom';
import cards from '../assets/cards.json';

function Card() {
  const { cardId } = useParams();
  let card = cards.filter((cards) => cards.id === cardId);
  console.log(card[0].id);
  console.log(card[0].essay);

  return (
    <div className="main">
      <img src={card[0].cover} className="main-illustration"></img>
      <div className="text">
        <h1>{card[0].title}</h1>
        <p>{card[0].essay}</p>
      </div>
    </div>
  );
}

export default Card;
