import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { useState, useEffect } from 'react'
import { IResponse } from '../../interfaces/data'
import styles from './Home.module.scss'

const URL: string = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50'
const AUCH: string = `4WEFRQ2-1N34QH1-QKVCJ37-5C0RQ1B`

const Home = () => {
	const [movies, setMovies] = useState<IResponse | null>(null)

	useEffect(() => {
		const storageMovies = localStorage.getItem('moviesList')

		if (storageMovies !== null) {
			const parseMovies: IResponse = JSON.parse(storageMovies)
			setMovies(parseMovies)
		} else {
			console.log('tyt')
			fetch(URL, {
				method: 'GET',
				headers: {
					'X-API-KEY': AUCH,
				},
			})
				.then(res => res.json())
				.then(data => {
					localStorage.setItem('moviesList', JSON.stringify(data))
					setMovies(data)
				})
				.catch(err => console.log('Ошибка:(', err))
		}
	}, [])

	console.log(movies !== null && movies.docs[0])

	return (
		<div className={styles.home}>
			{/* <header className={styles.header}>logo</header> */}
			<main>
				<h1>Movies</h1>
				<nav>
					<a>по жанру(можно несколько)</a>
					<a>по рейтингу(диапазон рейтинга)</a>
					<a>по году выпуска(с 1990)</a>
				</nav>
				<h1>hghghgh</h1>
				<ul>
					{movies !== null &&
						movies.docs.map((mov, i) => (
							<li key={mov.id}>
								{i}
								{mov.name}
							</li>
						))}
				</ul>
				{/* <MoviesCardList /> */}
			</main>
		</div>
	)
}
export default Home
