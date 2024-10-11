import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFilterSlice } from '../interfaces/data';
import { useGetMoviesQuery } from '../redux/api/moviesApi';
import { setPage, setPagesQty } from '../redux/slices/filterSlice';
import { setMovies } from '../redux/slices/moviesSlice';
import type { RootState } from '../redux/store';

const queryParams = ({ year, rating, genres }: IFilterSlice): string => {
  let y: string = '';
  let r: string = '';
  let g: string = '';

  if (year.from !== 0 && year.to !== 0) {
    const fromY: number = year.from > 0 ? year.from : 1900;
    const toY: number = year.to > 0 ? year.to : 2024;
    y = `&year=${fromY}-${toY}`;
  }

  if (rating.from !== 0 && rating.to !== 0) {
    const fromR: number = rating.from;
    const toR: number = rating.to;
    r = `&rating.kp=${fromR}-${toR}`;
  }

  if (
    Array.isArray(genres.selectedGenres) &&
    genres.selectedGenres.length !== 0
  ) {
    const str: string = '&genres.name=';
    g = genres.selectedGenres.reduce((acc, el) => acc + (str + el), '');
  }

  return y + r + g;
};

export const useFetchMovies = () => {
  const page = useSelector((state: RootState) => state.filter.pages.page);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const { data } = useGetMoviesQuery([page, queryParams(filter)]);

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data?.docs || []));
      dispatch(setPage(data?.page || 1));
      dispatch(setPagesQty(data?.pages || 1));
    }
  }, [dispatch, data]);

  return;
};
