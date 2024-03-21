import { AuthBanStyled, HomeStyledBan } from './BanAutn.styled';

const BannerDefault = () => {
  return (
    <HomeStyledBan>
      <div className="aboutHomeBanner">
        <h1>Build your library with us</h1>
        <p>Buy two books and get one for free</p>
        <button>Choose a book</button>
      </div>
      <div className="imageCon">
        <img
          alt="banner"
          src="/adaptivBanners/MainBanner/unsplash_DgQf1dUKUTM.png"
          className="booksImg"
        />
        <img
          alt="banner"
          src="/adaptivBanners/MainBanner/girlwhbook.png"
          className="girlImg"
        />
      </div>
    </HomeStyledBan>
  );
};

export default BannerDefault;
