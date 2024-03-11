import { SortBy } from '../pages/Types/types';
import axios from './axios.config';

export const getItemsWithGenre = async (payload: {
  ids: number[];
  page: number;
  prices: number;
  sortBy: SortBy;
}) => {
  const response = await axios.post(`generators/getitemsGenre`, {
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
  const response = await axios.post(`generators/getItemsForAuthorized`, {
    ids: payload.ids,
    page: payload.page,
    prices: payload.prices,
    sortBy: payload.sortBy,
  });
  return response.data;
};

export const addTofavoriteAsync = async (payload: { bookId: number }) => {
  const response = await axios.post(`generators/addBookToFavorites`, {
    bookId: payload.bookId,
  });
  return response.data;
};
