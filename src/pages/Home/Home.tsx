import { useEffect, useState } from 'react'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import { IResponse } from '../../interfaces/data'
import styles from './Home.module.scss'
import Filter from '../../components/Filter/Filter'
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const Home = () => {
	const [movies, setMovies] = useState<IResponse | null>(null)

	useEffect(() => {
		const storageMovies = localStorage.getItem('moviesList')

		if (storageMovies !== null) {
			const parseMovies: IResponse = JSON.parse(storageMovies)
			setMovies(parseMovies)
		} else {
			console.log('tyt')
			fetch(`${BASE_URL}`, {
				method: 'GET',
				headers: {
					'X-API-KEY': `${API_KEY}`,
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

	return (
		<div className={styles.home}>
			<Filter />
			<main>
				<MoviesCardList movies={movies} />
			</main>
			<PaginationOutlined />
		</div>
	)
}
export default Home
