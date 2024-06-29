import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeartIconActive from '../../images/heart-active.svg'
import HeartIcon from '../../images/heart.svg'
import { ICard } from '../../interfaces/data'
import styles from './MoviesCard.module.scss'

interface MoviesCardProps {
	mov: ICard
}

const MoviesCard: React.FC<MoviesCardProps> = ({ mov }) => {
	const [likes, setLikes] = useState<string[]>([])
	const [isLikeActive, setLikeActive] = useState<boolean>(false)

	const handleClick = (): void => {
		setLikeActive(!isLikeActive)
		setLikes([...likes, mov])
	}

	return (
		<li className={styles.card}>
			<article>
				<Link to={`/movie/${mov.id}`} className={styles.card__poster}>
					{mov.poster !== undefined && (
						<img className={styles.card__image} src={mov.poster.url} />
					)}
				</Link>
				<div className={styles.card__box}>
					<h2 className={styles.card__title}>
						{mov.name || mov.alternativeName}
					</h2>
					<div className={styles.card__info}>
						<div className={styles.card__rating}>
							<p className={styles.card__subtitle}>{mov.rating.imdb}</p>
						</div>
						<p className={styles.card__subtitle}>{mov.year}</p>
						<img
							onClick={handleClick}
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
