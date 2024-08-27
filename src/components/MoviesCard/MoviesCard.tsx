import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ICard } from '../../interfaces/data'
import { decSaveMovies, incSaveMovies } from '../../redux/slices/moviesSlice'
import type { RootState } from '../../redux/store'
import styles from './MoviesCard.module.scss'

interface IMoviesCardProps {
	mov: ICard
}

const MoviesCard: React.FC<IMoviesCardProps> = ({ mov }) => {
	const saveMovies = useSelector((state: RootState) => state.movies.saveMovies)
	const dispatch = useDispatch()

	const [isLikeActive, setLikeActive] = useState<boolean>(
		saveMovies.some(el => el.id === mov.id),
	)

	useEffect(() => {
		localStorage.setItem('saveMovies', JSON.stringify(saveMovies))
	}, [saveMovies])

	const handleClick = (arg: ICard): void => {
		if (isLikeActive) {
			dispatch(decSaveMovies(Number(arg.id)))
		} else {
			dispatch(incSaveMovies(arg))
		}
		setLikeActive(!isLikeActive)
	}

	return (
		<li className={styles.card}>
			<article>
				<Link to={`/movie/${mov.id}`} className={styles.card__poster}>
					{!!mov.poster && typeof mov.poster.url === 'string' && (
						<img className={styles.card__image} src={mov.poster.url} />
					)}
				</Link>

				<div className={styles.card__box}>
					<h2 className={styles.card__title}>
						{mov.name || mov.alternativeName}
					</h2>
					<div className={styles.card__info}>
						<div className={styles.card__rating}>
							<p className={styles.card__subtitle}>
								{mov.rating.kp?.toFixed(1)}
							</p>
						</div>
						<p className={styles.card__subtitle}>{mov.year}</p>

						<Heart
							className={styles.card__like}
							onClick={() => handleClick(mov)}
							fill={isLikeActive ? '#646cff' : 'silver'}
							color={isLikeActive ? '#646cff' : 'silver'}
						/>
					</div>
				</div>
			</article>
		</li>
	)
}
export default MoviesCard
