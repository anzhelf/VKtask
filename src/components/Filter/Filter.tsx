// import { useState } from 'react'
import SelectChip from './components/SelectChip/SelectChip'
import SelectRating from './components/SelectRating/SelectRating'
import SelectYear from './components/SelectYear/SelectYear'
import styles from './Filter.module.scss'

const Filter = () => {
	// const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']
	// const data = ['1.01.2000', '1.01.2000', '1.01.2000', '1.01.2000', '1.01.2000']
	// const rating = [0, 1, 2, 3, 4, 5]
	// const [selectedGenres, setSelectedGenres] = useState([])

	return (
		<div className={styles.filter}>
			<SelectYear />
			<SelectRating />
			<SelectChip />
			<button>search</button>
		</div>
	)
}

export default Filter
