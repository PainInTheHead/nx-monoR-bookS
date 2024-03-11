import {
  takeLatest,
  put,
  call,
  takeLeading,
  takeEvery,
} from 'redux-saga/effects';

import {
  Book,
  actionGetBooks,
  actionGetBooksUser,
  actionAddToFavorite,
  changeLiked,
  addBooks,
  actionGetBooksWithGenres,
  addGenres,
} from '../slices/bookSlice';
import {
  getItemsWithGenre,
  getItemsForAuthorized,
  addTofavoriteAsync,
} from '../../api/booksApi';
import { SortBy } from '../../pages/Types/types';

function* handleAddFavorite(action: { payload: { bookId: number } }) {
  try {
    const bookId: number = yield action.payload.bookId;
    const data: { book: number } = yield call(addTofavoriteAsync, {
      bookId: bookId,
    });
    yield put(changeLiked({ bookId: data.book }));
    console.log(data.book);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleGetBooksDefault(action: {
  payload: { genres: number[]; page: number; prices: number; sortBy: SortBy };
}) {
  try {
    const data: { allBooks: Book; totalCount: number; totalPages: number } =
      yield call(getItemsWithGenre, {
        ids: action.payload.genres,
        page: action.payload.page,
        prices: action.payload.prices,
        sortBy: action.payload.sortBy,
      });
    const { allBooks, totalPages } = data;
    yield put(addBooks({ allBooks, totalPages }));
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleGetBooksWhithUser(action: {
  payload: { genres: number[]; page: number; prices: number; sortBy: SortBy };
}) {
  try {
    const data: {
      allBooks: Book;
      totalCount: number;
      totalPages: number;
    } = yield call(getItemsForAuthorized, {
      ids: action.payload.genres,
      page: action.payload.page,
      prices: action.payload.prices,
      sortBy: action.payload.sortBy,
    });
    const { allBooks, totalPages } = data;
    yield put(addBooks({ allBooks, totalPages }));
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

// function* handleGenresBooksForAuthorized() {
//   try {
//     const
//   } catch (error) {

//   }
// }

export function* bookSaga() {
  yield takeLatest(actionGetBooks, handleGetBooksDefault);
  yield takeLatest(actionGetBooksUser, handleGetBooksWhithUser);
  yield takeEvery(actionAddToFavorite, handleAddFavorite);
  // yield takeLatest(actionGetBooksWithGenres, handleGenresBooksForAuthorized);
}
