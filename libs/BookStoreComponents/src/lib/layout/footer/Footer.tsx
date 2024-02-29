import { FooterMain } from './footer.styled';
import { useEffect } from 'react';

const Footer = () => {
  return (
    <FooterMain>
      <div className="conteiner">
        <div className="contacts-con">
          <img
            className="logoDark"
            src="/logoDark.png"
            alt="logo1"
            width={88}
            height={46}
          />
          <div className="contacts">
            <span>tranthuy.nute@gmail.com</span>
            <span>(480) 555-0103</span>
          </div>
        </div>
        <div className="nav-footer">
          <nav>
            <ul>
              <li>
                <a href="/">Home Page</a>
              </li>
              <li>
                <a href="/">Catalog</a>
              </li>
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">Cart</a>
              </li>
              <li>
                <a href="#" onClick={() => {}}>
                  Exit
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="map-footer">
          <span>6391 Elgin St. Celina, Delaware 10299</span>
          <img src="/map.png" alt="our Map" width={413} height={160} />
        </div>
      </div>
    </FooterMain>
  );
};

export default Footer;
