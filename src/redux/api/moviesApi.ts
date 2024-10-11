import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenres, IResponse } from '../../interfaces/data';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<IGenres[], void>({
      query: () => '/possible-values-by-field?field=genres.name',
    }),
    getMovies: builder.query<IResponse | null, [number, any]>({
      query: ([page, params]) => `?page=${page}&limit=50${params}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = moviesApi;
