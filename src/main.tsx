import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { store } from './redux/store.ts'
import './index.css'

import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<Suspense fallback={<div>'loading...'</div>}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</Suspense>,
	// </React.StrictMode>
)
