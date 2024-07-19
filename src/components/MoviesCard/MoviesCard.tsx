import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeartIconActive from '../../images/heart-active.svg'
import HeartIcon from '../../images/heart.svg'
import { ICard } from '../../interfaces/data'
import styles from './MoviesCard.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { incSaveMovies, decSaveMovies } from '../../redux/slices/moviesSlice'
import type { RootState } from '../../redux/store'

interface IMoviesCardProps {
	mov: ICard
}

const MoviesCard: React.FC<IMoviesCardProps> = ({ mov }) => {
	const saveMovies = useSelector((state: RootState) => state.movies.saveMovies)
	const dispatch = useDispatch()

	const [isLikeActive, setLikeActive] = useState<boolean>(
		saveMovies.includes(Number(mov.id)),
	)

	useEffect(() => {
		localStorage.setItem('saveMovies', JSON.stringify(saveMovies))
	}, [saveMovies])

	const handleClick = (id: number): void => {
		if (isLikeActive) {
			dispatch(decSaveMovies(id))
		} else {
			dispatch(incSaveMovies(id))
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
						<img
							onClick={() => handleClick(Number(mov.id))}
							className={`${styles.card__like} ${
								isLikeActive && styles.card__like_active
							}`}
							src={isLikeActive ? HeartIconActive : HeartIcon}
						/>
					</div>
				</div>
			</article>
		</li>
	)
}
export default MoviesCard
