import { createSlice, createAction } from '@reduxjs/toolkit';
import { SortBy } from '../../pages/Types/types';

import toast from 'react-hot-toast';

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

export interface Cart {
  bookId: number;
  title: string;
  price: number;
  count: number;
  author: string;
  cover: string;
}
export interface genresFilter {
  id: number;
  name: string;
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
  recommendations: Book[];
  searchQuery: string;
  genresFilter: genresFilter[];
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
  recommendations: [],
  searchQuery: '',
  genresFilter: [],
};

export const actionGetGenresFilters = createAction(`books/getGenres`);

export const actionGetCommentsOfBook = createAction(
  `books/getComments`,
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);

export const actionGetCommentsOfBookAuth = createAction(
  `books/getRecommendationsAuth`,
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);

export const actionGetRecomend = createAction(
  'books/getRecommendations',
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);

export const actionGetBooks = createAction(
  'books/getitemsGenre',
  (genres, page, prices, sortBy, searchQuery) => ({
    payload: {
      genres,
      page,
      prices,
      sortBy,
      searchQuery,
    },
  })
);
export const actionGetBooksUser = createAction(
  'books/getItemsForAuthorized',
  (genres, page, prices, sortBy, searchQuery) => ({
    payload: {
      genres,
      page,
      prices,
      sortBy,
      searchQuery,
    },
  })
);
export const actionAddToFavorite = createAction(
  'books/addBookToFavorites',
  (bookId, navigate: (path: string) => void) => ({
    payload: {
      bookId,
      navigate,
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
  (bookId, rate, navigate: (path: string) => void) => ({
    payload: {
      bookId,
      rate,
      navigate,
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
  (bookId, count, navigate: (path: string) => void) => ({
    payload: {
      bookId,
      count,
      navigate,
    },
  })
);

export const actionRequestCartBook = createAction(`books/getBooksOfCarts`);

export const actionPutNewComment = createAction(
  `books/newCommentCurrentBook`,
  (bookId, text) => ({
    payload: {
      bookId,
      text,
    },
  })
);

export const actionGetCurrentBook = createAction(
  `books/getCurrentBook`,
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);

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
        if (likedBook.liked) {
          toast.success('Removed from favorites successfully', {
            icon: '✅',
          });
        } else {
          toast.success('Added to favorites successfully!', {
            icon: '✅',
          });
        }
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
      if (action.payload.length !== 0) {
        state.cart = action.payload;
      }
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
        currentBook.count = action.payload.count;
      }
    },
    getComments(state, action) {
      const currentBook = state.book.find(
        (book) => book.bookId === action.payload.bookId
      );
      if (currentBook) {
        currentBook.comments = action.payload.data;
      }
    },
    putComment(state, action) {
      const currentBook = state.book.find(
        (book) => book.bookId === action.payload.bookId
      );
      if (currentBook) {
        currentBook.comments.push(action.payload.data);
      }
    },
    getRecomend(state, action) {
      state.recommendations = action.payload;
    },
    changeLikedRec(state, action) {
      const likedBook = state.recommendations.find((book) => {
        return book.bookId === action.payload.bookId;
      });
      if (likedBook) {
        likedBook.liked = !likedBook.liked;
      }
    },
    changeSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    getCurrentBookState(state, action) {
      state.book = state.book.map((book) =>
        book.bookId === action.payload.bookId
          ? {
              ...action.payload.currentBook,
              comments: book.comments,
              liked: book.liked,
            }
          : book
      );
    },
    addGenresFilters(state, action) {
      state.genresFilter = action.payload;
    },
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
  putComment,
  getRecomend,
  changeLikedRec,
  changeSearchQuery,
  getCurrentBookState,
  addGenresFilters,
} = todoSlice.actions;

export default todoSlice.reducer;
