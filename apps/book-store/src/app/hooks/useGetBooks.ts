import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hookStore';
import { actionGetBooksUser } from '../store/slices/bookSlice';


const useGetBooksUserEffect = () => {
  const dispatch = useAppDispatch();
  const genresState = useAppSelector((books) => books.books.genres);
  const currentPage = useAppSelector((books) => books.books.currentPage) + 1;
  const priceBetween = useAppSelector((state) => state.books.prices);
  const sortBy = useAppSelector((state) => state.books.sortBy);
  const prices = priceBetween.map((price) => Math.floor(price / 100));
  const searchQuery = useAppSelector((state) => state.books.searchQuery);
  const user = useAppSelector((state) => state.user.user);
  const status = useAppSelector((state) => state.books.status)

  useEffect(() => {
    dispatch(
      actionGetBooksUser(genresState, currentPage, prices, sortBy, searchQuery)
    );
  }, [user, genresState, currentPage, prices, sortBy, searchQuery, dispatch]);
};

export default useGetBooksUserEffect;
