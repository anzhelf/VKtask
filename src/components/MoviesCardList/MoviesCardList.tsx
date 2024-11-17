import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import MoviesCard from '../MoviesCard/MoviesCard';
import styles from './MoviesCardList.module.scss';

interface IMoviesCardProps {
  typePage: boolean;
}

const MoviesCardList: FC<IMoviesCardProps> = ({ typePage }) => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const saveMovies = useSelector((state: RootState) => state.movies.saveMovies);

  if (!movies) return <div>Loading...</div>;
  return (
    <main className={styles.main}>
      <ul className={styles.main__list}>
        {typePage
          ? !!saveMovies &&
            saveMovies.map((mov) => <MoviesCard key={mov.id} mov={mov} />)
          : !!movies &&
            movies.map((mov) => <MoviesCard key={mov.id} mov={mov} />)}
      </ul>
    </main>
  );
};
export default MoviesCardList;
