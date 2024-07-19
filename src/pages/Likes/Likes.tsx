import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import styles from '../Home/Home.module.scss'

import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const Likes = () => {
	const saveMovies = useSelector((state: RootState) => state.movies.saveMovies)

	return (
		<div className={styles.home}>
			{!!saveMovies && <MoviesCardList typePage={true} />}
		</div>
	)
}
export default Likes
