import logo from './logo.png';

import { useState } from 'react';
import { HeaderMain } from './header.styled';

const Header = () => {
  return (
    <HeaderMain>
      <div className="search-section">
        <button onClick={() => {}}>
          <img src="/logo.svg" alt="logo1" width={88} height={46} />
        </button>
        <div className="search-container">
          <p>Catalog</p>
          <div className="input-con-search-container">
            <button className="btn btn-input">
              <img src="/Search.svg" alt="logo1" width={24} height={24} />
            </button>
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="btn-login-con">
          <button className="btn-login" onClick={() => {}}>
            Log In/
          </button>
          <button className="btn-login" onClick={() => {}}>
            Sing Up
          </button>
        </div>
      </div>
    </HeaderMain>
  );
};

export default Header;
