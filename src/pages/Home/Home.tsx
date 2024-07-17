import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined'
import { IResponse } from '../../interfaces/data'
import styles from './Home.module.scss'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const Home = () => {
	const [movies, setMovies] = useState<IResponse | null>(null)

	const [query, setQuery] = useState<number>(1)
	const [page, setPage] = useState<number>(1)
	const [pageQty, setPagesQty] = useState<number>(0)

	useEffect(() => {
		async function fetchMovies() {
			try {
				const { data } = await axios.get(`${BASE_URL}?page=${page}&limit=50`, {
					method: 'GET',
					headers: {
						'X-API-KEY': `${API_KEY}`,
					},
				})
				localStorage.setItem('moviesList', JSON.stringify(data))
				setMovies(data)
				setPage(data.page)
				setPagesQty(data.pages)
			} catch (e) {
				console.log('Произошла ошибка, при получении фильмов:', e)
			}
		}
		fetchMovies()
		// const storageMovies = localStorage.getItem('moviesList')

		// if (storageMovies !== null) {
		// 	const parseMovies: IResponse = JSON.parse(storageMovies)
		// 	setMovies(parseMovies)
		// } else {
		// 	fetchMovies()
		// }
	}, [query, page])

	console.log(page, pageQty)

	const handleChange = (event: React.ChangeEvent<unknown>, num: number) => {
		setPage(num)
	}

	return (
		<div className={styles.home}>
			<Filter />
			<main>{movies !== null && <MoviesCardList movies={movies} />}</main>
			<PaginationOutlined
				pageQty={pageQty}
				page={page}
				handleChange={handleChange}
			/>
		</div>
	)
}
export default Home
