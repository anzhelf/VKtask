import { useEffect, useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import styles from './Home.module.scss'

// const URL: string = 'https://api.kinopoisk.dev/v1.4/movie'
// const AUCH: string = `4WEFRQ2-1N34QH1-QKVCJ37-5C0RQ1B`

// type Data = {
// 	docs: any[]
// }

type arrData = {
	id: number
	name: string
	year: number
	poster: string
	rating: number
}

const arr: arrData[] = [
	{
		id: 1,
		name: 'Какой-то фильм',
		year: 1998,
		poster:
			'https://avatars.dzeninfra.ru/get-zen_doc/5234612/pub_639af5b032b4045b940757c3_639af791ab35ed6281892839/scale_1200',
		rating: 4.6,
	},
	{
		id: 2,
		name: 'Какой-то фильм',
		year: 1995,
		poster: 'https://images-na.ssl-images-amazon.com/images/I/71zHlF75N+L.jpg',
		rating: 4.0,
	},
	{
		id: 3,
		name: 'Однажды в голивуде',
		year: 1999,
		poster:
			'https://ulpressa.ru/wp-content/uploads/old/2023/02/t0VQC2SJjblZXgSYhEIJTqWmjGI6JJNNwRlgGH0iw_V_o_Ml3dh94r5HUrftYyMYGL8RXCpCi765uaIlTzqqmVPN.jpg',
		rating: 8.9,
	},
]

const Home = () => {
	// const [movies, setMovies] = useState<Data>([])

	const [movies, setMovies] = useState<arrData[]>([])
	// useEffect(() => {
	// 	const arrMovies: any = JSON.parse(localStorage.getItem('moviesList')) || []

	// 	if (arrMovies.length === 0) {
	// 		console.log('tyt')
	// 		fetch(URL, {
	// 			method: 'GET',
	// 			headers: {
	// 				'X-API-KEY': AUCH,
	// 			},
	// 		})
	// 			.then((res: any) => res.json())
	// 			.then(dataMovies => {
	// 				localStorage.setItem('moviesList', JSON.stringify(dataMovies))
	// 				setMovies(JSON.parse(localStorage.getItem('moviesList')))
	// 			})
	// 			.catch((e: any) => console.log('err333', e))
	// 	} else {
	// 		setMovies(arrMovies)
	// 	}
	// }, [])

	// useEffect(() => {
	// 	if (movies.length !== 0) {
	// 		console.log(movies.docs[3].poster ? movies.docs[3].poster.url : '444')
	// 	}
	// }, [movies])

	useEffect(() => {
		setMovies(arr)
		console.log(movies)
	}, [movies])

	return (
		<div className={styles.home}>
			<header className={styles.header}>logo</header>
			<main>
				<h1>Movies</h1>
				<nav>
					Фильтры списка фильмов: по жанру(можно несколько), по
					рейтингу(диапазон рейтинга), по году выпуска(с 1990)
				</nav>

				<MoviesCardList />
			</main>
		</div>
	)
}
export default Home
