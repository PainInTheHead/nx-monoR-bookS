import { useAppDispatch } from "../../../hooks/hookStore";
import { Book, actionAddToCart, actionAddToFavorite } from "../../../store/slices/bookSlice";
import { StyledFavHolder } from "./FavHolder.styled";
import { Card, Cart, User } from '@book-store/BookStoreLibrary';


interface PropsFavHolder {
  likedBooks: Book[];
  cart: Cart[];
  user: User
}

const FavHolder: React.FC<PropsFavHolder> = ({likedBooks, cart, user}) => {
  const dispatch = useAppDispatch()
  const hangleSetLikedBook = (bookId: number) => {
    dispatch(actionAddToFavorite(bookId));
  };

  const handleAddtoCart = (bookId: number, count: number) => {
    dispatch(actionAddToCart(bookId, count));
  };




  return (

    <StyledFavHolder>
<div className="border_con">
            {likedBooks.map((book) => {
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

    </StyledFavHolder>
   );
}

export default FavHolder;
