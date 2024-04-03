import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hookStore';
import { BannetAuth, Layout, LoaderPage } from '@book-store/BookStoreLibrary';
import { exitUser } from '../../store/slices/userSlice';
import { StyledDetailCard } from './StyledBookDetails.styled';
import { useEffect, useState } from 'react';
import {
  actionGetRaitingCurrentBook,
  actionGetCommentsOfBook,
  actionGetRecomend,
  actionAddToCart,
  actionGetCommentsOfBookAuth,
  actionGetCurrentBook,
} from '../../store/slices/bookSlice';
import FormNewCom from './formComment/Form';
import AboutDetailCard from './aboutDetail/aboutDetail';
import Recommendations from './Recommendations/Recommendations';
import CommentsHolder from './comments/CommentsHolder';
import { appRoutes } from '@book-store/BookStoreLibrary';
import io from 'socket.io-client';

const BooksDetails = () => {
  const [value, setValue] = useState<number | null>(0);
  const { loginPath } = appRoutes;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const book = useAppSelector((state) => state.books.book).find(
    (book) => book.bookId === Number(id)
  );
  const userEmail = useAppSelector((state) => state.user.user.email);
  const bookId = Number(id);
  const coments = book?.comments;
  const cart = useAppSelector((cart) => cart.books.cart);
  const user = useAppSelector((state) => state.user.user);
  const totalQuantity = cart.reduce((total, book) => total + book.count, 0);
  const books = useAppSelector((state) => state.books.book);
  const curentCount = cart.find((book) => book.bookId === bookId);
  const counted = curentCount?.count;
  const [stateBuy, setStateBuy] = useState(false);
  const [count, setCount] = useState(counted);
  
  useEffect(() => {
    const socket = io('http://localhost:3005/');

    socket.on('connect', () => {
      socket.emit('join_book', bookId);
      console.log('Подключились к серверу Socket.IO');
    });

    socket.on('disconnect', () => {
      console.log('Отключились от сервера Socket.IO');
    });

    socket.on('receive_comment', (data) => {
      dispatch(actionGetCommentsOfBook(data));
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    dispatch(actionGetCurrentBook(bookId));
    // dispatch(actionGetCommentsOfBook(bookId));
    dispatch(actionGetRecomend(bookId));
  }, [bookId, dispatch]);


  useEffect(() => {
    if (userEmail) {
      dispatch(actionGetRaitingCurrentBook(bookId));
    }
  }, [userEmail, dispatch]);

  useEffect(() => {
    if (book?.rateOfUser) {
      setValue(book.rateOfUser);
    }
  }, [book?.rateOfUser, setValue]);



  const handleExitBtn = () => {
    dispatch(exitUser());
    localStorage.clear();
    navigate(loginPath);
  };
  const navigateFunction = (path: string) => {
    navigate(path);
  };

  const handleAddtoCart = (bookId: number, count: number) => {
    dispatch(actionAddToCart(bookId, count, navigateFunction));
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
          <CommentsHolder coments={coments} />
          {userEmail ? <FormNewCom bookId={bookId} /> : <BannetAuth />}
          <Recommendations
            user={user}
            cart={cart}
            handleAddtoCart={handleAddtoCart}
          />
        </StyledDetailCard>
      ) : (
        <LoaderPage />
      )}
    </Layout>
  );
};

export default BooksDetails;
