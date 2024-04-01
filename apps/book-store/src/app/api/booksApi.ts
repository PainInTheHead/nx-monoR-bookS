import { string } from 'zod';
import { SortBy } from '../pages/Types/types';
import axios from './axios.config';

export const postItemsWithGenre = async (payload: {
  ids: number[];
  page: number;
  prices: number;
  sortBy: SortBy;
  searchQuery: string;
}) => {
  const response = await axios.post(`books/filtered`, {
    ids: payload.ids,
    page: payload.page,
    prices: payload.prices,
    sortBy: payload.sortBy,
    searchQuery: payload.searchQuery,
  });
  return response.data;
};

export const getItemsForAuthorized = async (payload: {
  ids: number[];
  page: number;
  prices: number[];
  sortBy: SortBy;
  searchQuery: string;
}) => {
  const response = await axios.post(`books/filtered`, {
    ids: payload.ids,
    page: payload.page,
    prices: payload.prices,
    sortBy: payload.sortBy,
    searchQuery: payload.searchQuery,
  });
  return response.data;
};

export const addTofavoriteAsync = async (payload: { bookId: number }) => {
  const response = await axios.post(`books/favorites`, {
    bookId: payload.bookId,
  });
  return response.data;
};

export const changeRatingBookAsync = async (payload: { bookId: number, rate: number }) => {
  const response = await axios.post(`books/change/rating`, {
    bookId: payload.bookId,
    rate: payload.rate,
  });
  return response.data;
};

export const getUserRatingBookAsync = async (payload: { bookId: number }) => {
  const response = await axios.get(`books/rate`, {
    params: {
      bookId: payload.bookId,
    },
  });
  return response.data;
};



export const getCartBooksAsync = async () => {
  const response = await axios.get(`books/cart`);
  return response.data;
};


export const addBookToCartAsync = async (payload: { bookId: number, count: number }) => {
  const response = await axios.post(`books/cart`, {
    bookId: payload.bookId,
    count: payload.count,
  });
  return response.data;
};


export const getCommentForCurrentBookAsync = async (payload: { bookId: number }) => {
  const response = await axios.get(`books/comment`, {
    params: {
      bookId: payload.bookId,
    },
  });
  return response.data;
};

export const postCommentForCurrentBookAsync = async (payload: { bookId: number, text: string }) => {
  const response = await axios.post(`books/comment`, {
    text: payload.text,
    bookId: payload.bookId,
  });
  return response.data;
};


export const getRecommendations = async (payload: { bookId: number}) => {
  const response = await axios.post(`books/recommendation`, {
      bookId: payload.bookId,
  });
  return response.data;
};


export const getRecommendationsForAuth = async (payload: { bookId: number}) => {
  const response = await axios.post(`books/recommendation/foruser`, {
    bookId: payload.bookId,
  });
  return response.data;
};


export const getCurrentBook = async (payload: { bookId: number }) => {
  const response = await axios.get(`books/book/${payload.bookId}`);
  return response.data;
};

export const getGenresNamesFilters = async () => {
  const response = await axios.get(`books/genres`);
  return response.data;
};


