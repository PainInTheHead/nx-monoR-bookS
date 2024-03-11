import {
  createSlice,
  PayloadAction,
  isAnyOf,
  createAction,
  current,
} from '@reduxjs/toolkit';
import { SortBy } from '../../pages/Types/types';

export interface Book {
  bookId: number;
  title: string;
  description: string;
  author: string;
  price: number;
  liked: boolean;
  average: number;
  //   cover: string
}

interface BookState {
  book: Book[];
  status: null | 'loading' | 'succeeded' | 'failed';
  genres: number[];
  totalPages: number;
  currentPage: number;
  prices: number[];
  sortBy: SortBy;
}

const initialState: BookState = {
  book: [],
  status: null,
  genres: [],
  totalPages: 1,
  currentPage: 0,
  prices: [100, 999900],
  sortBy: 'Price'
};

export const actionGetBooks = createAction(
  'generators/getitemsGenre',
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
  'generators/getItemsForAuthorized',
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
  'generators/addBookToFavorites',
  (bookId) => ({
    payload: {
      bookId,
    },
  })
);
export const actionGetBooksWithGenres = createAction(
  `generators/getItemsGenresForAuthorized`,
  (genres) => ({
    payload: {
      genres,
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
      if (likedBook?.liked === true) {
        likedBook.liked = false;
      } else if (likedBook?.liked === false) {
        likedBook.liked = true;
      }
    },
    addGenres(state, action) {
      const haveThisGenre = state.genres.find(
        (genre) => genre === action.payload.genreId
      );
      if (!haveThisGenre) {
        state.genres.push(action.payload.genreId);
      } else {
        const filter = state.genres.filter(
          (genre) => genre !== action.payload.genreId
        );
        state.genres = filter;
      }
    },
    updateCurrentPage(state, action) {
      state.currentPage = action.payload.page;
    },
    setPrices(state, action) {
      state.prices = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
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
} = todoSlice.actions;

export default todoSlice.reducer;
