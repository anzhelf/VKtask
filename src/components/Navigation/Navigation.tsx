import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navigation = () => {
	const { t } = useTranslation()
	return (
		<nav className={styles.menu}>
			<NavLink
				style={({ isActive }) => ({ color: isActive && '#646cff' })}
				className={styles.menu__link}
				to='/'
			>
				{t('movies')}
			</NavLink>
			<NavLink
				style={({ isActive }) => ({ color: isActive && '#646cff' })}
				className={styles.menu__link}
				to='/likes'
			>
				{t('savedMovies')}
			</NavLink>
		</nav>
	)
}

export default Navigation
