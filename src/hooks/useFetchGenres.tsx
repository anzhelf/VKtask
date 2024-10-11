import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ICard, IResponseGenre } from '../interfaces/data';
import { setStackGenre } from '../redux/slices/filterSlice';
import { setSaveMovies } from '../redux/slices/moviesSlice';

export const useFetchGenres = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchGenres() {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/possible-values-by-field?field=genres.name`,
          {
            method: 'GET',
            headers: {
              'X-API-KEY': `${API_KEY}`,
            },
          },
        );
        dispatch(setStackGenre(data));
        localStorage.setItem('genresStack', JSON.stringify(data));
      } catch (e) {
        console.log('Произошла ошибка, при получении списка жанров:', e);
      }
    }

    const storageSaveMovies = localStorage.getItem('saveMovies');
    if (storageSaveMovies !== null) {
      const parseSaveMovies: ICard[] = JSON.parse(storageSaveMovies);
      dispatch(setSaveMovies(parseSaveMovies));
    }

    const storageStackGenres = localStorage.getItem('genresStack');
    if (storageStackGenres !== null) {
      const parseGenres: IResponseGenre[] = JSON.parse(storageStackGenres);
      dispatch(setStackGenre(parseGenres));
    } else {
      fetchGenres();
    }
  }, [dispatch, BASE_URL, API_KEY]);
};
