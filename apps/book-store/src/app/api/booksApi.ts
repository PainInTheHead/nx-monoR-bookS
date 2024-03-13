import { SortBy } from '../pages/Types/types';
import axios from './axios.config';

export const getItemsWithGenre = async (payload: {
  ids: number[];
  page: number;
  prices: number;
  sortBy: SortBy;
}) => {
  const response = await axios.post(`books/getitemsGenre`, {
    ids: payload.ids,
    page: payload.page,
    prices: payload.prices,
    sortBy: payload.sortBy,
  });
  return response.data;
};

export const getItemsForAuthorized = async (payload: {
  ids: number[];
  page: number;
  prices: number;
  sortBy: SortBy;
}) => {
  const response = await axios.post(`books/getItemsForAuthorized`, {
    ids: payload.ids,
    page: payload.page,
    prices: payload.prices,
    sortBy: payload.sortBy,
  });
  return response.data;
};

export const addTofavoriteAsync = async (payload: { bookId: number }) => {
  const response = await axios.post(`books/addBookToFavorites`, {
    bookId: payload.bookId,
  });
  return response.data;
};

export const changeRatingBookAsync = async (payload: { bookId: number, rate: number }) => {
  const response = await axios.post(`books/changeRatingOfBook`, {
    bookId: payload.bookId,
    rate: payload.rate,
  });
  return response.data;
};

export const getUserRatingBookAsync = async (payload: { bookId: number }) => {
  const response = await axios.get(`books/getUserRatingCurrentBook`, {
    params: {
      bookId: payload.bookId,
    },
  });
  return response.data;
};



export const getCartBooksAsync = async () => {
  const response = await axios.get(`books/getBooksOfCarts`);
  return response.data;
};


export const addBookToCartAsync = async (payload: { bookId: number, count: number }) => {
  const response = await axios.post(`books/addBookToCart`, {
    bookId: payload.bookId,
    count: payload.count,
  });
  return response.data;
};


export const getCommentForCurrentBookAsync = async (payload: { bookId: number }) => {
  const response = await axios.get(`books/getCommentForCurrentBook`, {
    params: {
      bookId: payload.bookId,
    },
  });
  return response.data;
};