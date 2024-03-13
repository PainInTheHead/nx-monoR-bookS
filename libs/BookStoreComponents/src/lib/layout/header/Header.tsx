import logo from './logo.png';

import { useState } from 'react';
import { HeaderMain } from './header.styled';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface propsHeader {
  user: string | null;
}

const Header = ({ user }: propsHeader) => {
  const navigate = useNavigate();
  return (
    <HeaderMain>
      <div className="search-section">
        <Link to="/">
          <img src="/logo.svg" alt="logo1" width={88} height={46} />
        </Link>
        <div className="search-container">
          <p>Catalog</p>
          <div className="input-con-search-container">
            <button className="btn btn-input">
              <img src="/Search.svg" alt="logo1" width={24} height={24} />
            </button>
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>
        {user ? (
          <div className="user-buttons">
            <button onClick={() => navigate('/cart')}>
              <img
                className="cart-img"
                src="/cart/Cart.svg"
                width={26}
                height={26}
                alt="cart"
              />
            </button>
            <button>
              <img
                src="/card/liked.svg"
                width={48}
                height={48}
                alt="liked of User"
              />
            </button>
            <button onClick={() => navigate('/profile')}>
              <img
                src="/cart/userprofile.svg"
                width={48}
                height={48}
                alt="profile"
              />
            </button>
          </div>
        ) : (
          <div className="btn-login-con">
            <Link to="/login" className="btn-login">
              Log In/
            </Link>
            <Link to="/registration" className="btn-login">
              Sing Up
            </Link>
          </div>
        )}

        {/* <button className="btn-login" onClick={() => {}}>
            Log In/
          </button>
          <button className="btn-login" onClick={() => {}}>
            Sing Up
          </button> */}
      </div>
    </HeaderMain>
  );
};

export default Header;
