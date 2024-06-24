// import React, { FC } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import styles from './MoviesCardList.module.scss'

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

const MoviesCardList = () => {
	return (
		<ul className={styles.list}>
			{arr.map(mov => (
				<MoviesCard key={mov.id} mov={mov} />
			))}
		</ul>
	)
}
export default MoviesCardList
