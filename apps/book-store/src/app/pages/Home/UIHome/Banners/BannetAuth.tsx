import { Link } from "react-router-dom";
import { AuthBanStyled } from "./BanAutn.styled";

const BannetAuth = () => {
  return (
    <AuthBanStyled>
      <div className="aboutAuthBanner">
        <h1>Authorize now</h1>
        <p>Authorize now and discover the fabulous world of books</p>
        <div className="btn-login-con">
          <Link to="/login" className="btn-login">
            Log In/
          </Link>
          <Link to="/registration" className="btn-login">
            Sing Up
          </Link>
        </div>
      </div>
      <div className="imageCon">
        <img
          src="/adaptivBanners/bannerAuth/Castle.png"
          width={521}
          height={462}
          alt="banner-low"
          className="CastleImg"
        />
        <img
          src="/adaptivBanners/bannerAuth/feya.png"
          width={478}
          height={759}
          alt="banner-low"
          className="FeayImg"
        />
      </div>
    </AuthBanStyled>
  );
};

export default BannetAuth;
