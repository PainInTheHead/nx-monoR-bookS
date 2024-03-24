import { appRoutes } from '../../appRoutes/appRoutes';
import { FooterMain } from './footer.styled';

interface propsFooter {
  hangleExit: () => void;
}

const Footer = ({ hangleExit }: propsFooter) => {
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
                <a href={appRoutes.homePath}>Home Page</a>
              </li>
              <li>
                <a href={appRoutes.homePath}>Catalog</a>
              </li>
              <li>
                <a href={appRoutes.profilePath}>My Account</a>
              </li>
              <li>
                <a href={appRoutes.cartPath}>Cart</a>
              </li>
              <li>
                <button className="btn-exit" onClick={hangleExit}>
                  Exit
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="map-footer">
          <span>6391 Elgin St. Celina, Delaware 10299</span>
          <img src="/map.png" alt="our Map" />
        </div>
      </div>
    </FooterMain>
  );
};

export default Footer;
