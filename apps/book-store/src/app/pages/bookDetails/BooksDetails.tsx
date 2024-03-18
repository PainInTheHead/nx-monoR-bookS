import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hookStore';
import { Layout } from '@book-store/BookStoreLibrary';
import { userEmailState, userState } from '../../utils/selectors';
import { exitUser } from '../../store/slices/userSlice';
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
  actionGetCurrentBook,
} from '../../store/slices/bookSlice';
import Comment from './comments/commentWrapper/Comment';
import FormNewCom from './formComment/FormNewCom';
import BannetAuth from '../Home/UIHome/Banners/BannetAuth';
import { Card } from '@book-store/BookStoreLibrary';
import AboutDetailCard from './aboutDetail/aboutDetail';
import Recommendations from './Recommendations/Recommendations';
import CommentsHolder from './comments/CommentsHolder';

const BooksDetails = () => {
  const [value, setValue] = useState<number | null>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const book = useAppSelector((state) => state.books.book).find(
    (book) => book.bookId === Number(id)
  );
  const userEmail = useAppSelector(userEmailState);
  const bookId = Number(id);
  const coments = book?.comments;
  const cart = useAppSelector((cart) => cart.books.cart);
  const user = useAppSelector(userState);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
  const books = useAppSelector((state) => state.books.book);
  const curentCount = cart.find((book) => book.bookId === bookId);
  const counted = curentCount?.count;
  const [stateBuy, setStateBuy] = useState(false);
  const [count, setCount] = useState(counted);

  useEffect(() => {
    if (userEmail) {
      dispatch(actionGetRaitingCurrentBook(bookId));
    }
  }, [userEmail, bookId, dispatch]);

  useEffect(() => {
    if (book?.rateOfUser) {
      setValue(book.rateOfUser);
    }
  }, [book?.rateOfUser, setValue]);

  useEffect(() => {
    dispatch(actionGetCurrentBook(bookId));
    dispatch(actionGetCommentsOfBook(bookId));

    if (user.email) {
      dispatch(actionGetCommentsOfBookAuth(bookId));
    } else {
      dispatch(actionGetRecomend(bookId));
    }
  }, [bookId, user.email, dispatch]);

  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate('/login');
  };

  const hangleSetLikedBook = (bookId: number) => {
    if (user.email) {
      dispatch(actionAddToFavorite(bookId));
      dispatch(changeLikedRec({ bookId: bookId }));
    }
  };

  const handleAddtoCart = (bookId: number, count: number) => {
    dispatch(actionAddToCart(bookId, count));
  };
  const likedBooks = books.filter((book) => book.liked === true);

  return (
    <Layout
      user={userEmail}
      hangleExit={handleExitBtn}
      totalQuantity={totalQuantity}
      likedCount={likedBooks.length}
    >
      {book ? (
        <StyledDetailCard>
          <AboutDetailCard
            book={book}
            value={value}
            setValue={setValue}
            count={count}
            stateBuy={stateBuy}
            user={user}
            bookId={bookId}
            setCount={setCount}
            handleAddtoCart={handleAddtoCart}
            setStateBuy={setStateBuy}
          />
          <CommentsHolder coments={coments}/>
          {userEmail ? <FormNewCom bookId={bookId} /> : <BannetAuth />}
          <Recommendations
            user={user}
            cart={cart}
            handleAddtoCart={handleAddtoCart}
          />
        </StyledDetailCard>
      ) : (
        <div>Book not Found ^_^</div>
      )}
    </Layout>
  );
};

export default BooksDetails;