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
  changeRatingOfBookAction,
  setUserRating,
  actionGetRaitingCurrentBook,
  actionRequestCartBook,
  addToCart,
  incrementCart,
  actionAddToCart,
  getComments,
  actionGetCommentsOfBook,
  actionPutNewComment,
  putComment,
  actionGetRecomend,
  getRecomend,
  actionGetCommentsOfBookAuth,
  getCurrentBookState,
  actionGetCurrentBook,
  addGenresFilters,
  actionGetGenresFilters,
} from '../slices/bookSlice';
import {
  getItemsWithGenre,
  getItemsForAuthorized,
  addTofavoriteAsync,
  changeRatingBookAsync,
  getUserRatingBookAsync,
  getCartBooksAsync,
  addBookToCartAsync,
  getCommentForCurrentBookAsync,
  postCommentForCurrentBookAsync,
  getRecommendations,
  getRecommendationsForAuth,
  getCurrentBook,
  getGenresNamesFilters,
} from '../../api/booksApi';
import { SortBy } from '../../pages/Types/types';
import { toast } from 'react-hot-toast';

function* handleAddFavorite(action: { payload: { bookId: number } }) {
  try {
    const bookId: number = yield action.payload.bookId;
    const data: { book: number } = yield call(addTofavoriteAsync, {
      bookId: bookId,
    });
    yield put(changeLiked({ bookId: data.book }));
    console.log(data.book);
  } catch (error) {
    toast.error('It is impossible to perform an action without authorization', {
      icon: '❌',
    });
    console.log(error);
  }
}

// toast.success('Authorization success!');
// toast.error('Authorization failure!');

function* handleGetBooksDefault(action: {
  payload: {
    genres: number[];
    page: number;
    prices: number;
    sortBy: SortBy;
    searchQuery: string;
  };
}) {
  try {
    const data: { allBooks: Book; totalCount: number; totalPages: number } =
      yield call(getItemsWithGenre, {
        ids: action.payload.genres,
        page: action.payload.page,
        prices: action.payload.prices,
        sortBy: action.payload.sortBy,
        searchQuery: action.payload.searchQuery,
      });
    const { allBooks, totalPages } = data;
    yield put(addBooks({ allBooks, totalPages }));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function* handleGetBooksWhithUser(action: {
  payload: {
    genres: number[];
    page: number;
    prices: number;
    sortBy: SortBy;
    searchQuery: string;
  };
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
      searchQuery: action.payload.searchQuery,
    });
    const { allBooks, totalPages } = data;
    yield put(addBooks({ allBooks, totalPages }));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function* handleChangeRating(action: {
  payload: { bookId: number; rate: number };
}) {
  try {
    const data: {
      value: number;
      book: number;
    } = yield call(changeRatingBookAsync, {
      bookId: action.payload.bookId,
      rate: action.payload.rate,
    });
    const { value, book } = data;

    yield put(setUserRating({ bookId: book, rate: value }));
    console.log(data);
    toast.success('Thanks for your feedback!', {
      icon: '❤',
    });
  } catch (error) {
    toast.error('It is impossible to perform an action without authorization', {
      icon: '❌',
    });
    console.log(error);
  }
}

function* handleGetRaiting(action: { payload: { bookId: number } }) {
  try {
    const data: {
      rate: number;
    } = yield call(getUserRatingBookAsync, {
      bookId: action.payload.bookId,
    });
    const { rate } = data;

    yield put(setUserRating({ bookId: action.payload.bookId, rate: rate }));
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleGetToCart() {
  try {
    const data: {
      bookId: number;
      title: string;
      price: number;
      author: string;
      count: number;
      cover: string;
    } = yield call(getCartBooksAsync);

    yield put(addToCart(data));
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleAddToCart(action: {
  payload: { bookId: number; count: number };
}) {
  try {
    const data: {
      bookId: number;
      title: string;
      price: number;
      author: string;
      count: number;
      cover: string;
    } = yield call(addBookToCartAsync, {
      bookId: action.payload.bookId,
      count: action.payload.count,
    });

    yield put(
      incrementCart({
        bookId: action.payload.bookId,
        count: action.payload.count,
      })
    );

    yield call(handleGetToCart);
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleGetComments(action: { payload: { bookId: number } }) {
  try {
    const data: {
      id: number;
      value: string;
      avatar: string;
      username: string;
      timeAgo: string;
    } = yield call(getCommentForCurrentBookAsync, {
      bookId: action.payload.bookId,
    });

    yield put(
      getComments({
        bookId: action.payload.bookId,
        data: data,
      })
    );
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handlePutComment(action: {
  payload: { bookId: number; text: string };
}) {
  try {
    const data: {
      id: number;
      value: string;
      avatar: string;
      username: string;
      timeAgo: string;
    } = yield call(postCommentForCurrentBookAsync, {
      bookId: action.payload.bookId,
      text: action.payload.text,
    });

    yield put(
      putComment({
        bookId: action.payload.bookId,
        data: data,
      })
    );
    console.log(data);
    toast.success('Thanks for your feedback!', {
      icon: '❤',
    });
  } catch (error) {
    toast.error('Unable to complete', {
      icon: '❌',
    });
    console.log(error);
  }
}

function* handleGetRecomend(action: { payload: { bookId: number } }) {
  try {
    const data: Book[] = yield call(getRecommendations, {
      bookId: action.payload.bookId,
    });

    yield put(getRecomend(data));
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleGetRecomendAuth(action: { payload: { bookId: number } }) {
  try {
    const data: Book[] = yield call(getRecommendationsForAuth, {
      bookId: action.payload.bookId,
    });

    yield put(getRecomend(data));
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleGetCurrentBook(action: { payload: { bookId: number } }) {
  try {
    const data: Book = yield call(getCurrentBook, {
      bookId: action.payload.bookId,
    });

    yield put(
      getCurrentBookState({ bookId: action.payload.bookId, currentBook: data })
    );
    console.log(data);
  } catch (error) {
    yield console.log(error);
  }
}

function* handleAddGenresFilters() {
  try {
    const data: Book = yield call(getGenresNamesFilters);
    yield put(addGenresFilters(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* bookSaga() {
  yield takeLatest(actionGetBooks, handleGetBooksDefault);
  yield takeLeading(actionGetBooksUser, handleGetBooksWhithUser);
  yield takeEvery(actionAddToFavorite, handleAddFavorite);
  yield takeEvery(changeRatingOfBookAction, handleChangeRating);
  yield takeLeading(actionGetRaitingCurrentBook, handleGetRaiting);
  yield takeLatest(actionRequestCartBook, handleGetToCart);
  yield takeEvery(actionAddToCart, handleAddToCart);
  yield takeLeading(actionGetCommentsOfBook, handleGetComments);
  yield takeEvery(actionPutNewComment, handlePutComment);
  yield takeLeading(actionGetRecomend, handleGetRecomend);
  yield takeLeading(actionGetCommentsOfBookAuth, handleGetRecomendAuth);
  yield takeLeading(actionGetCurrentBook, handleGetCurrentBook);
  yield takeLeading(actionGetGenresFilters, handleAddGenresFilters);
}
