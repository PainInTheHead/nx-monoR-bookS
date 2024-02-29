import { StyledHome } from './homePage.styled';
import DropDowns from './UIHome/DropDowns/DropDowns';
import BookSlider from './UIHome/Pagination';
import CardHolder from './UIHome/CardHolder';
import { Layout } from '@book-store/BookStoreLibrary';

export function HomePage() {
  return (
    <Layout>
      <StyledHome>
        <div className="banner-header">
          <img alt="banner" width="1280" height="400" src="/banner.png" />
        </div>
        <div className="catalog-filter">
          <h1 className={`h1-home-page`}>Catalog</h1>
          <DropDowns />
        </div>
        <CardHolder />
        <BookSlider />
        <img
          src="/banner/bannerLow.svg"
          width={1280}
          height={462}
          alt="banner-low"
        />
      </StyledHome>
    </Layout>
  );
}

export default HomePage;
