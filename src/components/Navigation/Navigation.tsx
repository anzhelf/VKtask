import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className={styles.menu}>
			<NavLink
				exact
				activeClassName={styles.menu__link_active}
				className={styles.menu__link}
				to='/'
			>
				Movies
			</NavLink>
			<NavLink
				activeClassName={styles.menu__link_active}
				className={styles.menu__link}
				to='/like'
			>
				LikeMovies
			</NavLink>
		</nav>
	)
}

export default Navigation
