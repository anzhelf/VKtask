import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICard } from '../../interfaces/data'
import styles from './CardPage.module.scss'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const CardPage = () => {
	const [movie, setMovie] = useState<ICard | null>(null)
	const { id } = useParams<{ id: string }>()

	useEffect(() => {
		async function fetchCard() {
			try {
				const { data } = await axios.get(`${BASE_URL}/${id}`, {
					method: 'GET',
					headers: {
						'X-API-KEY': `${API_KEY}`,
					},
				})
				setMovie(data)
			} catch (e) {
				console.log('Произошла ошибка, при получении фильма:', e)
			}
		}
		fetchCard()
	}, [])

	if (!movie) return <div>Loading...</div>

	return (
		<main>
			<article className={styles.card}>
				<div className={styles.card__poster}>
					{movie.poster !== undefined && (
						<img
							className={styles.card__image}
							src={movie.poster.url ? movie.poster.url : ''}
						/>
					)}
				</div>
				<div className={styles.card__box}>
					<h2 className={styles.card__title}>
						{movie.name || movie.alternativeName}
					</h2>
					<div className={styles.card__info}>
						<div className={styles.card__rating}>
							<p className={styles.card__subtitle}>
								{movie.rating.kp?.toFixed(1)}
							</p>
						</div>
						<p className={styles.card__subtitle}>{movie.year}</p>
					</div>
					<p className={styles.card__description}>
						{movie.description ? movie.description : 'Фильм без описания.'}
					</p>

					<ul>
						{movie.genres.map(el => (
							<li key={el.name} className={styles.card__genre}>
								{el.name}
							</li>
						))}
					</ul>
				</div>
			</article>
		</main>
	)
}

export default CardPage
