import { Card } from "@book-store/BookStoreLibrary";
import { dataAboutBooks } from "../utils/Data";
import { useAppSelector, useAppDispatch } from "../../../hooks/hookStore";
import { actionAddToFavorite } from "../../../store/slices/bookSlice";



const CardHolder = () => {
  const books = useAppSelector((book) => book.books.book)
  const dispatch = useAppDispatch()

  const hangleSetLikedBook = (bookId: number) => {
    dispatch(actionAddToFavorite(bookId));
  };

  return (
    <div className="catalog-content">
      {books.map((book) => {
        return (
          <Card
          key={book.bookId}
          hangleSetLikedBook={hangleSetLikedBook}
            {...book}
          />
        );
      })}
    </div>
  );
};

export default CardHolder;
