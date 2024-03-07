const BannerDefault = () => {
  return (
    <div className="HomeBanner">
      <div className="aboutHomeBanner">
        <h1>Build your library with us</h1>
        <p>Buy two books and get one for free</p>
        <button>Choose a book</button>
      </div>
      <div className="imageCon">
        <img
          alt="banner"
          width="542"
          height="327"
          src="/adaptivBanners/MainBanner/unsplash_DgQf1dUKUTM.png"
          className="booksImg"
        />
        <img
          alt="banner"
          width="406"
          height="400"
          src="/adaptivBanners/MainBanner/girlwhbook.png"
          className="girlImg"
        />
      </div>
    </div>
  );
};

export default BannerDefault;
