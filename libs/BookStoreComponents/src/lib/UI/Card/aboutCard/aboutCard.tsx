// import Rating from "../ratingStars/Rating";
import Rating from '@mui/material/Rating'
import RatingBook from '../ratingStars/RatingBook';

interface PropsAbout {
  name: string;
  author: string;
  price: number;
  value: number;
}

const AboutCard: React.FC<PropsAbout> = ({ name, author, price, value }) => {
  return (
    <div className="about-card">
      <div className="name-athor">
        <span>{name}</span>
        <span>{author}</span>
      </div>
      <RatingBook value={value} />
      <div>
        <button className="btn-price btn">
          <span className="price">${price} USD</span>
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
