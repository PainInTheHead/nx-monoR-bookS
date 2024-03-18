import { useNavigate } from 'react-router-dom';
import { StyledFavBanner } from './FavBanner.styled';

const FavBanner = () => {
  const navigate = useNavigate();
  return (
    <StyledFavBanner>
      <div className="empty_con">
        <img src="/cart/Books.png" alt="Books" />
        <div className="about_empty">
          <h1 className="cart_header">Your cart is empty</h1>
          <p className="description_cart">
            Add items to favorites to make a purchase.Go to the catalogue no.
          </p>
          <button className="btn btn_checkout" onClick={() => navigate('/')}>
            Go to catalog
          </button>
        </div>
      </div>
    </StyledFavBanner>
  );
};

export default FavBanner;
