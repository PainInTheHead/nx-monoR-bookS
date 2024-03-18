import { Rating } from '@mui/material';
import { StyledAboutDetailCard } from './aboutDetail.styled';
import {
  Book,
  changeRatingOfBookAction,
} from '../../../store/slices/bookSlice';
import { useAppDispatch } from '../../../hooks/hookStore';
import { User } from '@book-store/BookStoreLibrary';

interface PropsDetailAbout {
  book: Book;
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
  count: number | undefined;
  stateBuy: boolean;
  bookId: number;
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleAddtoCart: (bookId: number, count: number) => void;
  setStateBuy: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
}

const AboutDetailCard: React.FC<PropsDetailAbout> = ({
  book,
  value,
  setValue,
  count,
  stateBuy,
  bookId,
  setCount,
  handleAddtoCart,
  setStateBuy,
  user,
}) => {
  const dispatch = useAppDispatch();
  return (
    <StyledAboutDetailCard>
      <div className="book_about_warapper">
        <div className="coverBookDetail">
          <img src={book.cover} alt="bookdetail cover" />
        </div>
        <div className="aboutCardDetail">
          <h1 className="headerDetail">{book.title}</h1>
          <span className="authorDetail">{book.author}</span>
          <div className="rate">
            <img src="/bookDetail/Group2.png" alt="Star" />
            <span className="rateAverage">{book.average}</span>
            <div className="starDetails">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  dispatch(changeRatingOfBookAction(bookId, newValue));
                  // dispatch(actionGetCurrentBook(bookId));
                  console.log(newValue);
                }}
                sx={{
                  width: '220px',
                  justifyContent: 'space-between',
                  gap: '5px',
                }}
                size="large"
                icon={<img src="/bookDetail/Group2.png" alt="" />}
                emptyIcon={<img src="/bookDetail/emptyStar.png" alt="" />}
                // onChangeActive={() => console.log(value)}
              />
            </div>
            <div className="RateThisBook">
              <img src="/bookDetail/BackArrow.png" alt="" />
              <p>Rate this book</p>
            </div>
          </div>
          <h2 className="descDetail">Description</h2>
          <span className="fullDesc">{book.description}</span>
          <div className="btn-group-details">
            <div className="Paperback">
              <span className="header-btn-group">Paperback</span>
              <button className="btn btn-paper">Not available</button>
            </div>

            <div className="Hardcover">
              <span className="header-btn-group">Hardcover</span>
              <div>
                {count !== undefined && count > 0 && stateBuy && user.email ? (
                  <div className="cardCounter">
                    <button
                      onClick={() => {
                        handleAddtoCart(bookId, count - 1);
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                    <span className="countCard">{count}</span>
                    <button
                      onClick={() => {
                        handleAddtoCart(bookId, count + 1);
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn-price btn"
                    onClick={() => {
                      setStateBuy(true);
                      if (!count) {
                        handleAddtoCart(bookId, 1);
                        setCount(1);
                      } else {
                        handleAddtoCart(bookId, count);
                        setCount(count);
                      }
                    }}
                  >
                    <span className="price">${book.price} USD</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutDetailCard>
  );
};

export default AboutDetailCard;
