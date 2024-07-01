// import { useState } from 'react'
import styles from './Filter.module.scss'
// import TextField from '@mui/material/TextField'
// import { TextMaskCustom } from './TextMaskCustom'

const Filter = () => {
	// const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']
	// const [selectedGenres, setSelectedGenres] = useState([])

	// const handleCheckboxChange = genre => {
	// 	if (selectedGenres.includes(genre)) {
	// 		setSelectedGenres(
	// 			selectedGenres.filter(selectedGenre => selectedGenre !== genre),
	// 		)
	// 	} else {
	// 		setSelectedGenres([...selectedGenres, genre])
	// 	}
	// }

	// const handleSearch = () => {
	// 	console.log('Выбранные жанры для поиска:', selectedGenres)
	// }
	return (
		<div className={styles.filter}>
			{/* <ul className={styles.filter__container}>
				<li>
					<h2 className={styles.filter__title}>По жанру</h2>
					<ul className={styles.filter__block}>
						{genres.map(genre => (
							<label key={genre}>
								<input
									type='checkbox'
									value={genre}
									checked={selectedGenres.includes(genre)}
									onChange={() => handleCheckboxChange(genre)}
								/>
								{genre}
							</label>
						))}
					</ul>
				</li>
				<li>
					{' '}
					<h2 className={styles.filter__title}>По рейтингу</h2>
					<ul className={styles.filter__block}>
						{genres.map(genre => (
							<label key={genre}>
								<input
									type='checkbox'
									value={genre}
									checked={selectedGenres.includes(genre)}
									onChange={() => handleCheckboxChange(genre)}
								/>
								{genre}
							</label>
						))}
					</ul>
				</li>
				<li>
					<h2 className={styles.filter__title}>По дате</h2>
					<ul className={styles.filter__block}>
						<li>
							<input maxLength={4} minLength={4} />
						</li>
						<li>
							<input />
						</li>
					</ul>
				</li>
			</ul> */}

			{/* <TextField
				label='Введите год'
				InputProps={{
					inputComponent: TextMaskCustom,
				}}
			/> */}

			{/* <button className={styles.filter__button} onClick={handleSearch}>
				Поиск
			</button> */}
		</div>
	)
}

export default Filter
