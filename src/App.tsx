import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/Navigation/Navigation'
import CardPage from './pages/CardPage/CardPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.content}>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path="/likes" element={<Likes />} /> */}
				<Route path='/movie/:id' element={<CardPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}

export default App
