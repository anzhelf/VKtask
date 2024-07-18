import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className={styles.menu}>
			<NavLink
				style={({ isActive }) => ({ color: isActive && '#646cff' })}
				className={styles.menu__link}
				to='/'
			>
				Фильмы
			</NavLink>
			<NavLink
				style={({ isActive }) => ({ color: isActive && '#646cff' })}
				className={styles.menu__link}
				to='/like'
			>
				Избранное
			</NavLink>
		</nav>
	)
}

export default Navigation
