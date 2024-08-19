import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher = () => {
	const [selected, setSelected] = useState<number>(0)
	const { i18n } = useTranslation()
	const changeLanguage: (language: string) => void = language =>
		i18n.changeLanguage(language)

	const handleClick = (num: number, lang: string): void => {
		setSelected(num)
		changeLanguage(lang)
	}
	return (
		<div className={styles.switcher}>
			<button
				className={`${styles.switcher__button} ${
					selected === 0 && styles.switcher__button_active
				}`}
				onClick={() => handleClick(0, 'ru')}
			>
				RU
			</button>
			<button
				className={`${styles.switcher__button} ${
					selected === 1 && styles.switcher__button_active
				}`}
				onClick={() => handleClick(1, 'en')}
			>
				EN
			</button>
		</div>
	)
}
export default LanguageSwitcher
