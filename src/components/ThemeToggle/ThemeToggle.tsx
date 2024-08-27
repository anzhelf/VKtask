import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { toggleTheme } from '../../redux/slices/settingsSlice'

const ThemeToggle = () => {
	const theme = useSelector((state: RootState) => state.settings.theme)
	const dispatch = useDispatch()

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const handleToggleTheme = () => {
		dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))
	}

	return (
		<button onClick={handleToggleTheme}>
			{theme === 'light' ? 'Dark Theme' : 'Light Theme'}
		</button>
	)
}

export default ThemeToggle
