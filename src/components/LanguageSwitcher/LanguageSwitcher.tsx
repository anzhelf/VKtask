import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { toggleLanguage } from '../../redux/slices/settingsSlice'

const LanguageSwitcher = () => {
	const language = useSelector((state: RootState) => state.settings.langage)
	const dispatch = useDispatch()

	const { i18n } = useTranslation()
	const changeLanguage: (language: string) => void = language =>
		i18n.changeLanguage(language)

	const handleClick = (lang: string): void => {
		dispatch(toggleLanguage(language === 'ru' ? 'ru' : 'en'))
		changeLanguage(lang)
	}
	return (
		<div className={styles.switcher}>
			<button
				className={`${styles.switcher__button} ${
					language === 'ru' && styles.switcher__button_active
				}`}
				onClick={() => handleClick('ru')}
			>
				RU
			</button>
			<button
				className={`${styles.switcher__button} ${
					language === 'en' && styles.switcher__button_active
				}`}
				onClick={() => handleClick('en')}
			>
				EN
			</button>
		</div>
	)
}
export default LanguageSwitcher
