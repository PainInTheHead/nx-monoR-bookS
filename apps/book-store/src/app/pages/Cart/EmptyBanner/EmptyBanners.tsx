import { useNavigate } from "react-router-dom";
import { StyledEmptyBanner } from "./EmptyBanners.styled";



const EmptyBanner = () => {
    const navigate = useNavigate()
    return (
      <StyledEmptyBanner>
        <div className="empty_con">
          <img src="/cart/Books.png" alt="Books" />
          <div className="about_empty">
            <h1 className="cart_header">Your cart is empty</h1>
            <p className="description_cart">
              Add items to cart to make a purchase.Go to the catalogue no.
            </p>
            <button className="btn btn_checkout" onClick={() => navigate('/')}>
              Go to catalog
            </button>
          </div>
        </div>
      </StyledEmptyBanner>
    );
}
 
export default EmptyBanner;