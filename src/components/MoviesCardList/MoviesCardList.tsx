import { FC } from 'react'
import { IResponse } from '../../interfaces/data'
import MoviesCard from '../MoviesCard/MoviesCard'
import styles from './MoviesCardList.module.scss'

interface MoviesCardListProps {
	movies: IResponse
}

const MoviesCardList: FC<MoviesCardListProps> = ({ movies }) => {
	return (
		<ul className={styles.list}>
			{movies !== null &&
				movies.docs.map(mov => <MoviesCard key={mov.id} mov={mov} />)}
		</ul>
	)
}
export default MoviesCardList
