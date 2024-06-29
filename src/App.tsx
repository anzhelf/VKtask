import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{/* <Route path="/likes" element={<NotFoundPage />} /> */}
			{/* <Route path="/film/:id" element={<NotFoundPage />} /> */}
			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Routes>
	)
}

export default App
