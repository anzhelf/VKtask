import React from 'react'

interface FilterProps {
	genres: string[]
	ratings: number[]
	years: number[]
	selectedFilters: []
	handleChange: []
}

const Filter: React.FC<FilterProps> = ({
	genres,
	ratings,
	years,
	selectedFilters,
	handleChange,
}) => {
	return (
		<div>
			<h3>Фильтр</h3>
			<label>Жанр:</label>
			<select name='genre' multiple onChange={handleChange}>
				{genres.map(genre => (
					<option key={genre} value={genre}>
						{genre}
					</option>
				))}
			</select>

			<label>Рейтинг:</label>
			<input
				type='number'
				name='minRating'
				placeholder='Минимальный рейтинг'
				onChange={handleChange}
			/>
			<input
				type='number'
				name='maxRating'
				placeholder='Максимальный рейтинг'
				onChange={handleChange}
			/>

			<label>Год выпуска с 1990:</label>
			<select name='year' onChange={handleChange}>
				{years.map(year => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	)
}

export default Filter
