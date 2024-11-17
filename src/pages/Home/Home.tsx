import Filter from '../../components/Filter/Filter';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const Home = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const filter = useSelector((state: RootState) => state.filter);

  return (
    <div className={styles.home}>
      <Filter />
      {!!movies && <MoviesCardList typePage={false} />}
      {filter.pages.pagesQty > 1 && <PaginationOutlined />}
    </div>
  );
};
export default Home;
