import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import styles from './Settings.module.scss'

const Settings = () => {
	return (
		<div className={styles.settings}>
			<ThemeSwitcher />
			<LanguageSwitcher />
		</div>
	)
}
export default Settings
