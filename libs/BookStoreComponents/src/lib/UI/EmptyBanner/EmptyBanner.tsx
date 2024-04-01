import { useNavigate } from 'react-router-dom';
import { StyledFavBanner } from './EmptyBanner.styled';

interface Propsbaner {
  place: string;
}

export function EmptyBanner({ place }: Propsbaner) {
  const navigate = useNavigate();
  return (
    <StyledFavBanner>
      <div className="empty_con">
        <div className='image'>

        <img src="/cart/Books.png" alt="Books" />
        </div>
        <div className="about_empty">
          <h1 className="cart_header">Your {place} is empty</h1>
          <p className="description_cart">
            Add items to {place} to make a purchase.Go to the catalogue no.
          </p>
          <button className="btn btn_checkout" onClick={() => navigate('/')}>
            Go to catalog
          </button>
        </div>
      </div>
    </StyledFavBanner>
  );
}

export default EmptyBanner;
