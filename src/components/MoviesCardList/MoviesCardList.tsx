import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import MoviesCard from '../MoviesCard/MoviesCard'
import styles from './MoviesCardList.module.scss'

const MoviesCardList = () => {
	const movies = useSelector((state: RootState) => state.movies.value)
	return (
		<main className={styles.main}>
			<ul className={styles.main__list}>
				{!!movies && movies.map(mov => <MoviesCard key={mov.id} mov={mov} />)}
			</ul>
		</main>
	)
}
export default MoviesCardList
