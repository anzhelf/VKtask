import SelectGenres from './components/SelectGenres/SelectGenres'
import SelectRating from './components/SelectRating/SelectRating'
import SelectYear from './components/SelectYear/SelectYear'
import styles from './Filter.module.scss'

const Filter = () => {
	return (
		<div className={styles.filter}>
			<SelectYear />
			<SelectRating />
			<SelectGenres />
			<button>Поиск</button>
		</div>
	)
}
export default Filter
