// import Rating from "../ratingStars/Rating";
import Rating from '@mui/material/Rating';
import RatingBook from '../ratingStars/RatingBook';
import { useState } from 'react';

interface PropsAbout {
  name: string;
  author: string;
  price: number;
  value: number;
}

const AboutCard: React.FC<PropsAbout> = ({ name, author, price, value }) => {
  const [stateBuy, setStateBuy] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="about-card">
      <div className="name-athor">
        <span>{name}</span>
        <span>{author}</span>
      </div>
      <RatingBook value={value} />
      <div>
        {count > 0 ? (
          <div className="cardCounter">
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span className='countCard'>
            {count}
            </span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button className="btn-price btn" onClick={() => setCount(1)}>
            <span className="price">${price} USD</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
