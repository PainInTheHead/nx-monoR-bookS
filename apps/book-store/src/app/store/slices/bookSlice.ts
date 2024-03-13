import {
  createSlice,
  PayloadAction,
  isAnyOf,
  createAction,
  current,
} from '@reduxjs/toolkit';
import { SortBy } from '../../pages/Types/types';
import { create } from 'domain';

export interface Comment {
  value: string;
  avatar:string;
  username:string
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
  comments: Comment[]
  //   cover: string
}

export interface Cart {
  bookId: number;
  title: string;
  price: number;
  count: number;
  author: string;
}

interface BookState {
  book: Book[];
  status: null | 'loading' | 'succeeded' | 'failed';
  genres: number[];
  totalPages: number;
  currentPage: number;
  prices: number[];
  sortBy: SortBy;
  cart: Cart[];
}

const initialState: BookState = {
  book: [],
  status: null,
  genres: [],
  totalPages: 1,
  currentPage: 0,
  prices: [100, 999900],
  sortBy: 'Price',
  cart: [],
};

export const actionGetCommentsOfBook = createAction(
  `books/getComments`, 
  (bookId) => ({
    payload: {
      bookId
    }
  })
)

export const actionGetBooks = createAction(
  'books/getitemsGenre',
  (genres, page, prices, sortBy) => ({
    payload: {
      genres,
      page,
      prices,
      sortBy,
    },
  })
);
export const actionGetBooksUser = createAction(
  'books/getItemsForAuthorized',
  (genres, page, prices, sortBy) => ({
    payload: {
      genres,
      page,
      prices,
      sortBy,
    },
  })
);
export const actionAddToFavorite = createAction(
  'books/addBookToFavorites',
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);
export const actionGetBooksWithGenres = createAction(
  `books/getItemsGenresForAuthorized`,
  (genres) => ({
    payload: {
      genres,
    },
  })
);

export const changeRatingOfBookAction = createAction(
  `books/changeRatingOfBook`,
  (bookId, rate) => ({
    payload: {
      bookId,
      rate,
    },
  })
);

export const actionGetRaitingCurrentBook = createAction(
  `books/getUserRatingCurrentBook`,
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);

export const actionAddToCart = createAction(
  `books/addBookToCart`,
  (bookId, count) => ({
    payload: {
      bookId,
      count,
    },
  })
);

export const actionRequestCartBook = createAction(`books/getBooksOfCarts`);

const todoSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBooks(state, actions) {
      state.book = actions.payload.allBooks;
      state.totalPages = actions.payload.totalPages;
    },
    changeLiked(state, action) {
      const likedBook = state.book.find((book) => {
        return book.bookId === action.payload.bookId;
      });
      if (likedBook) {
        likedBook.liked = !likedBook.liked;
      }
    },
    addGenres(state, action) {
      const haveThisGenre = state.genres.find(
        (genre) => genre === action.payload.genreId
      );

      if (!haveThisGenre) {
        state.genres.push(action.payload.genreId);
      } else {
        state.genres = state.genres.filter(
          (genre) => genre !== action.payload.genreId
        );
      }
    },
    updateCurrentPage(state, action) {
      state.currentPage = action.payload.page;
    },

    setPrices(state, action) {
      state.prices = action.payload;
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    setUserRating(state, action) {
      const currentBook = state.book.find(
        (book) => book.bookId === action.payload.bookId
      );
      if (currentBook) {
        currentBook.rateOfUser = action.payload.rate;
      }
    },
    addToCart(state, action) {
      state.cart = action.payload;
    },
    incrementCart(state, action) {
      const currentBook = state.cart.find(
        (cartBook) => cartBook.bookId === action.payload.bookId
      );
      if (action.payload.count === 0) {
       state.cart = state.cart.filter(
          (book) => book.bookId !== action.payload.bookId
        );
      }

      if (currentBook) {
        (currentBook.count = action.payload.count);
      }
    },
    getComments(state, action) {
      const currentBook = state.book.find(book => book.bookId = action.payload.bookId)
      if (currentBook) {
        currentBook.comments = action.payload.data
      }
    }
  },
});

export const {
  addBooks,
  changeLiked,
  addGenres,
  updateCurrentPage,
  setPrices,
  setSortBy,
  setUserRating,
  addToCart,
  incrementCart,
  getComments,
} = todoSlice.actions;

export default todoSlice.reducer;
