import React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import { AuthBanStyled, HomeStyledBan } from './Banners.styled';


interface PropsHomeBanner {
  executeScroll: () => void
}
export function BannerDefault ({executeScroll}: PropsHomeBanner) {
  return (
    <HomeStyledBan>
      <div className="aboutHomeBanner">
        <h1>Build your library with us</h1>
        <p>Buy two books and get one for free</p>
        <CustomButton
          color=" #344966"
          text="Choose a book"
          type="submit"
          width="230px"
          onClick={executeScroll}
        />
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
}

export default BannerDefault;
