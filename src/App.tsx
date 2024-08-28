import { ThemeProvider } from '@mui/material/styles'
import type { RootState } from './redux/store'
import { useSelector } from 'react-redux'
import styles from './App.module.scss'
import AppRoutes from './components/AppRoutes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Settings from './components/Settings/Settings'
import { darkTheme, lightTheme } from './theme'
import { useFetchMovies } from './hooks/useFetchMovies'
import { useFetchGenres } from './hooks/useFetchGenres'

function App() {
	const theme = useSelector((state: RootState) => state.settings.theme)
	useFetchMovies()
	useFetchGenres()

	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			<div className={styles.content}>
				<Settings />
				<Navigation />
				<AppRoutes />
			</div>
		</ThemeProvider>
	)
}

export default App
