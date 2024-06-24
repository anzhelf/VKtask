import React, { useState } from 'react'
import styles from './MoviesCard.module.scss'
import HeartIcon from '../../images/heart.svg'
import HeartIconActive from '../../images/heart-active.svg'

type arrData = {
	id: number
	name: string
	year: number
	poster: string
	rating: number
}

interface IProps {
	mov: arrData[]
}

const MoviesCard: React.FC<IProps> = ({ mov }) => {
	const [likes, setLikes] = useState<arrData[]>([])
	const [isLikeActive, setLikeActive] = useState<boolean>(false)

	const handleClick = (): void => {
		setLikeActive(!isLikeActive)
		setLikes(prev => [...prev, mov])
	}
	return (
		<li className={styles.card}>
			<article>
				<div className={styles.card__poster}>
					<img className={styles.card__image} src={mov.poster} />
				</div>
				<div className={styles.card__box}>
					<h2 className={styles.card__title}>{mov.name}</h2>
					<div className={styles.card__info}>
						<div className={styles.card__rating}>
							<p className={styles.card__subtitle}>{mov.rating}</p>
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
