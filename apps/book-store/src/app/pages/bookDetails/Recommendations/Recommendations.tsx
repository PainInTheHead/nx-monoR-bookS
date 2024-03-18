import React from 'react';
import { StyledRecommendations } from './Recommendations.styled';
import { useAppDispatch, useAppSelector } from '../../../hooks/hookStore';
import { actionAddToFavorite, changeLikedRec } from '../../../store/slices/bookSlice';
import { Cart, User } from '@book-store/BookStoreLibrary';
import { Card } from '@book-store/BookStoreLibrary';
interface PropsRecommendations {
  handleAddtoCart: (bookId: number, count: number) => void;
  user: User;
  cart: Cart[]
}


const Recommendations: React.FC<PropsRecommendations> = ({handleAddtoCart, user, cart}) => {
  const recommended = useAppSelector((state) => state.books.recommendations);
  const dispatch = useAppDispatch()
  const hangleSetLikedBook = (bookId: number) => {
    if (user.email) {
      dispatch(actionAddToFavorite(bookId));
      dispatch(changeLikedRec({ bookId: bookId }));
    }
  };

  return (
    <StyledRecommendations>
      <div className="recommendations">
        <h1 className="header_rec">Recommendations</h1>
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
    </StyledRecommendations>
  );
};

export default Recommendations;
