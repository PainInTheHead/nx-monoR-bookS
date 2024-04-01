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
  setStatus,
} from '../slices/bookSlice';
import {
  postItemsWithGenre,
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

function* handleAddFavorite(action: {
  payload: { bookId: number; navigate: (path: string) => void };
}) {
  try {
    const bookId: number = yield action.payload.bookId;
    const data: { book: number } = yield call(addTofavoriteAsync, {
      bookId: bookId,
    });
    yield put(changeLiked({ bookId: data.book }));
  } catch (error) {
    toast.error('It is impossible to perform an action without authorization', {
      icon: '❌',
    });
    action.payload.navigate('/login');
  }
}

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
      yield call(postItemsWithGenre, {
        ids: action.payload.genres,
        page: action.payload.page,
        prices: action.payload.prices,
        sortBy: action.payload.sortBy,
        searchQuery: action.payload.searchQuery,
      });
    const { allBooks, totalPages } = data;
    yield put(addBooks({ allBooks, totalPages }));
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
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
    yield put(setStatus('loading'))
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
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
    // yield put(setStatus('failed'))
  } finally {
      // yield put(setStatus('succeeded'))

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
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
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
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
  }
}

function* handleAddToCart(action: {
  payload: { bookId: number; count: number; navigate: (path: string) => void };
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
  } catch (error) {
    toast.error('It is impossible to perform an action without authorization', {
      icon: '❌',
    });
    action.payload.navigate('/login');
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
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
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
    toast.success('Thanks for your feedback!', {
      icon: '❤',
    });
  } catch (error) {
    toast.error('Unable to complete', {
      icon: '❌',
    });
  }
}

function* handleGetRecomend(action: { payload: { bookId: number } }) {
  try {
    const data: Book[] = yield call(getRecommendations, {
      bookId: action.payload.bookId,
    });

    yield put(getRecomend(data));
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
  }
}

function* handleGetRecomendAuth(action: { payload: { bookId: number } }) {
  try {
    const data: Book[] = yield call(getRecommendationsForAuth, {
      bookId: action.payload.bookId,
    });

    yield put(getRecomend(data));
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
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
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
  }
}

function* handleAddGenresFilters() {
  try {
    const data: Book = yield call(getGenresNamesFilters);
    yield put(addGenresFilters(data));
  } catch (error) {
    toast.error('Unexpected error, please reload the page', {
      icon: '❌',
    });
  }
}

function* handleChangeRating(action: {
  payload: { bookId: number; rate: number; navigate: (path: string) => void };
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
    yield call(handleGetCurrentBook, {
      payload: { bookId: action.payload.bookId },
    });
    toast.success('Thanks for your feedback!', {
      icon: '❤',
    });
  } catch (error) {
    action.payload.navigate('/login');
    toast.error('It is impossible to perform an action without authorization', {
      icon: '❌',
    });
  }
}

export function* bookSaga() {
  yield takeLatest(actionGetBooks, handleGetBooksDefault);
  yield takeLatest(actionGetBooksUser, handleGetBooksWhithUser);
  yield takeEvery(actionAddToFavorite, handleAddFavorite);
  yield takeEvery(changeRatingOfBookAction, handleChangeRating);
  yield takeLeading(actionGetRaitingCurrentBook, handleGetRaiting);
  yield takeLatest(actionRequestCartBook, handleGetToCart);
  yield takeEvery(actionAddToCart, handleAddToCart);
  yield takeLeading(actionGetCommentsOfBook, handleGetComments);
  yield takeEvery(actionPutNewComment, handlePutComment);
  yield takeLeading(actionGetRecomend, handleGetRecomend);
  yield takeLeading(actionGetCommentsOfBookAuth, handleGetRecomendAuth);
  yield takeEvery(actionGetCurrentBook, handleGetCurrentBook);
  yield takeLeading(actionGetGenresFilters, handleAddGenresFilters);
}
