import { Card, LoaderPage } from "@book-store/BookStoreLibrary";
import { useAppSelector, useAppDispatch } from "../../../hooks/hookStore";
import { actionAddToFavorite, actionRequestCartBook } from "../../../store/slices/bookSlice";
import { actionAddToCart } from "../../../store/slices/bookSlice";
import { useNavigate } from "react-router-dom";


const CardHolder = () => {
  const books = useAppSelector((book) => book.books.book)
  const cart = useAppSelector((cart) => cart.books.cart)
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const navigateFunction = (path: string) => {
    navigate(path);
  };
  const hangleSetLikedBook = (bookId: number) => {
    dispatch(actionAddToFavorite(bookId, navigateFunction));
  };


  const handleAddtoCart = (bookId : number , count : number) => {
    dispatch(actionAddToCart(bookId, count, navigateFunction));
  }

  return (
    <div className="catalog-content">
      {books.map((book) => {
        return (
          <Card
            key={book.bookId}
            hangleSetLikedBook={hangleSetLikedBook}
            handleAddtoCart={handleAddtoCart}
            cart={cart}
            user={user}
            book={book}
          />
        );
      })}
    </div>
  );
};

export default CardHolder;
