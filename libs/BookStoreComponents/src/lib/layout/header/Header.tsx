import logo from './logo.png';

import { useState } from 'react';
import { HeaderMain } from './header.styled';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../UI/Card/Cards';
import { appRoutes } from '../../appRoutes/appRoutes';
interface propsHeader {
  user: string | null;
  hangleSetCearch?: (SearchQuery: string) => void;
  totalQuantity: number;
  likedCount: number;
}

const Header = ({
  user,
  hangleSetCearch,
  totalQuantity,
  likedCount,
}: propsHeader) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  let timeoutId: NodeJS.Timeout | null;

  const handleSearch = (value: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      if (hangleSetCearch) {
        hangleSetCearch(value);
      }
    }, 1000);
  };

  return (
    <HeaderMain>
      <div className="search-section">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="logo1" />
        </Link>
        <p>Catalog</p>
        <div className="search-container">
          <div className="input-con-search-container">
            <button className="btn btn-input">
              <img src="/Search.svg" alt="logo1" width={24} height={24} />
            </button>
            {hangleSetCearch ? (
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
              />
            ) : (
              <input
                className="input"
                type="text"
                placeholder="Search"
                disabled
              />
            )}
          </div>
        </div>
        {user ? (
          <div className="user-buttons">
            <button className="cart_btn" onClick={() => navigate('/cart')}>
              <img
                className="cart-img icons"
                src="/header_icons/Cart.svg"
                alt="cart"
              />
              {totalQuantity > 0 && (
                <div className="cart-img-count">{totalQuantity}</div>
              )}
            </button>
            <button onClick={() => navigate('/favorites')}>
              <img
                className="favorites_img icons"
                src="/header_icons/favorites.svg"
                alt="liked of User"
              />
              {likedCount > 0 && (
                <div className="cart-img-count">{likedCount}</div>
              )}
            </button>
            <button onClick={() => navigate('/profile')}>
              <img
                className="user_img icons"
                src="/header_icons/user.svg"
                alt="profile"
              />
            </button>
          </div>
        ) : (
          <div className="btn-login-con">
            <Link to={appRoutes.loginPath} className="btn-login">
              Log In/
            </Link>
            <Link to={appRoutes.registrationPath} className="btn-login">
              Sing Up
            </Link>
          </div>
        )}
      </div>
    </HeaderMain>
  );
};

export default Header;
