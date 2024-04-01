import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './hookStore';
import { actionGetBooksUser } from '../store/slices/bookSlice';
import { SortBy } from '../pages/Types/types';

export interface PropsGetBooksUser {
  genresState: number[],
  currentPage: number,
  prices: number[], 
  sortBy: SortBy, 
  searchQuery: string,
}



const useGetBooksUserEffect = () => {
  const dispatch = useAppDispatch();
  const genresState = useAppSelector((books) => books.books.genres);
  const currentPage = useAppSelector((books) => books.books.currentPage) + 1;
  const priceBetween = useAppSelector((state) => state.books.prices);
  const sortBy = useAppSelector((state) => state.books.sortBy);
  const prices = useMemo(() => {
    return priceBetween.map((price) => Math.floor(price / 100));
}, [priceBetween]);
  const searchQuery = useAppSelector((state) => state.books.searchQuery);
  const user = useAppSelector((state) => state.user.user);
const actionBooksProps = {genresState, currentPage, prices, sortBy, searchQuery}
  useEffect(() => {
    dispatch(
      actionGetBooksUser(actionBooksProps)
    );
  }, [user, genresState, currentPage, prices, sortBy, searchQuery, dispatch]);
};

export default useGetBooksUserEffect;
