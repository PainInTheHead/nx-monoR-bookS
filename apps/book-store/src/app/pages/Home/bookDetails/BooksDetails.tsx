import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/hookStore';
import { Layout } from '@book-store/BookStoreLibrary';
import { userEmailState, userState } from '../../../utils/selectors';
import { exitUser } from '../../../store/slices/userSlice';
import { StyledDetailCard } from './StyledBookDetails.styled';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import {
  changeRatingOfBookAction,
  setUserRating,
  actionGetRaitingCurrentBook,
  actionGetCommentsOfBook,
  actionGetRecomend,
  actionAddToFavorite,
  actionAddToCart,
  actionGetCommentsOfBookAuth,
  changeLikedRec,
} from '../../../store/slices/bookSlice';
import Comment from './comments/Comment';
import FormNewCom from './formComment/FormNewCom';
import BannetAuth from '../UIHome/Banners/BannetAuth';
import { Card } from "@book-store/BookStoreLibrary";

const BooksDetails = () => {
  const [value, setValue] = useState<number | null>(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const book = useAppSelector((state) => state.books.book).find(
    (book) => book.bookId === Number(id)
  );
  const userEmail = useAppSelector(userEmailState);
  const cover = '/card/covers/1.png';
  const bookId = Number(id);
  const coments = book?.comments;
  const recommended = useAppSelector(state => state.books.recommendations)
  const cart = useAppSelector((cart) => cart.books.cart)
  const user = useAppSelector(userState);

  useEffect(() => {
    if (userEmail) {
      dispatch(actionGetRaitingCurrentBook(bookId));
      if (book?.rateOfUser) {
        setValue(book?.rateOfUser);
      }
    }
  }, [book?.rateOfUser, dispatch, userEmail]);

  useEffect(() => {
    dispatch(actionGetCommentsOfBook(bookId));
    if (user.email) {
      dispatch(actionGetCommentsOfBookAuth(bookId));
    } else {
      dispatch(actionGetRecomend(bookId))

    }
  }, [user, dispatch, ]);

  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };
  const hangleSetLikedBook = (bookId: number) => {
    dispatch(actionAddToFavorite(bookId));
    dispatch(changeLikedRec({bookId: bookId}))
  };


  const handleAddtoCart = (bookId : number , count : number) => {
    dispatch(actionAddToCart(bookId, count));
  }

  return (
    <Layout user={userEmail} hangleExit={handleExitBtn}>
      {book ? (
        <StyledDetailCard>
          <div className="book_about_warapper">
            <div className="coverBookDetail">
              <img src={cover} alt="bookdetail cover" />
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
                  <button className="btn btn-hard">${book.price} USD</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="headerDetail Comment_headader">Comments</h1>
          <div className="all_comments__curentbook">
            {coments?.length === 0 ? (
              <p className="first_comment">Be the first to comment!</p>
            ) : (
              coments?.map((comment) => {
                return <Comment key={comment.id} {...comment} />;
              })
            )}
          </div>
          {userEmail ? <FormNewCom bookId={bookId} /> : <BannetAuth />}
          <div className='recommendations'>
            <h1 className='header_rec'>Recommendations</h1>
            <div className="catalog_content">
              {recommended.map((book) => {
                return (
                  <Card
                    key={book.bookId}
                    hangleSetLikedBook={hangleSetLikedBook}
                    handleAddtoCart={handleAddtoCart}
                    cart={cart}
                    user={user}
                    {...book}
                  />
                );
              })}
            </div>
          </div>
        </StyledDetailCard>
      ) : (
        <div>Book not Found ^_^</div>
      )}
    </Layout>
  );
};

export default BooksDetails;
