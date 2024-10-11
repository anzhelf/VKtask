export interface IResponse {
  docs: ICard[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface ICard {
  id: number | null;
  name: string | null;
  alternativeName: string | null;
  enName: string | null;
  type: string | null;
  year: number | true;
  description: string | null;
  shortDescription: string | null;
  rating: IRating;
  poster?: IPoster;
  genres: IGenres[];
}

export interface IGenres {
  name: string;
}

interface IRating {
  kp: number | null;
  imdb: number | null;
  filmCritics: number | null;
  russianFilmCritics: number | null;
  await: number | null;
}

interface IPoster {
  url: string | null;
  previewUrl: string | null;
}

export interface IResponseGenre {
  name: string;
  slug: string;
}

export interface IFilterSlice {
  year: {
    from: number;
    to: number;
  };
  rating: {
    from: number;
    to: number;
  };
  genres: {
    stackGenres: IResponseGenre[] | null;
    selectedGenres: string[] | string;
  };

  pages: {
    pagesQty: number;
    page: number;
  };
}

export interface ISettingsSlice {
  theme: string;
  langage: string;
}

export interface IMoviesState {
  movies: ICard[] | null;
  saveMovies: ICard[] | [];
}
