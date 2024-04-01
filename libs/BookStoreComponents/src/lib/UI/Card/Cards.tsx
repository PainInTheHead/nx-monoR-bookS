import { StyledCard } from './card.styled';
import CoverCard from './coverCard/CoverCard';
import AboutCard from './aboutCard/aboutCard';

export function Card({
  cart,
  user,
  book,
  hangleSetLikedBook,
  handleAddtoCart,
}: PropsCard) {
const {bookId, title, author, average, price, liked, cover} = book;
  return (
    <StyledCard>
      <CoverCard
        handleClickLikeBtn={() => hangleSetLikedBook(bookId)}
        liked={liked}
        cover={cover}
        bookId={bookId}
      />
      <AboutCard
        handleAddtoCart={handleAddtoCart}
        name={title}
        author={author}
        price={price}
        value={average}
        bookId={bookId}
        cart={cart}
        user={user}
      />
    </StyledCard>
  );
}

export default Card;


export interface Cart {
  bookId: number;
  title: string;
  price: number;
  count: number;
  author: string;
  cover: string;
}

export interface User {
  email: string;
  password: string | null;
  username: string | 'Guest';
  id: number | null;
  avatar?: string;
  active?: boolean;
}

export interface Comments {
  id: number;
  value: string;
  avatar: string;
  username: string;
  timeAgo: string;
}
export interface Book {
  bookId: number;
  title: string;
  description: string;
  author: string;
  price: number;
  liked: boolean;
  average: number;
  rateOfUser: number;
  comments: Comments[];
  cover: string;
}



interface PropsCard {
  cart: Cart[];
  user: User;
  hangleSetLikedBook: (bookId: number) => void;
  handleAddtoCart: (bookId: number, count: number) => void;
  book: Book
}
