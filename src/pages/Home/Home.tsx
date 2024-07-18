import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined'
import { IResponse } from '../../interfaces/data'
import styles from './Home.module.scss'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

// const q = {
// 	year: 0,
// 	rating: 0,
// 	genre: 0,
// 	page: 0
// }

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
	}, [query, page])

	const handleChangePagination = (
		_: React.ChangeEvent<unknown>,
		num: number,
	) => {
		setPage(num)
	}

	return (
		<div className={styles.home}>
			<Filter />
			{!!movies && <MoviesCardList movies={movies} />}
			<PaginationOutlined
				pageQty={pageQty}
				page={page}
				handleChangePagination={handleChangePagination}
			/>
		</div>
	)
}
export default Home
