import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../../redux/slices/settingsSlice';
import type { RootState } from '../../../redux/store';
import styles from '../Settings.module.scss';

const LanguageSwitcher = () => {
  const language = useSelector((state: RootState) => state.settings.langage);
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const changeLanguage: (language: string) => void = (language) =>
    i18n.changeLanguage(language);

  const handleClick = (lang: string): void => {
    dispatch(toggleLanguage(lang));
    changeLanguage(lang);
    console.log(lang);
  };

  return (
    <button
      className={styles.settings__button}
      onClick={() => handleClick(language === 'ru' ? 'en' : 'ru')}
    >
      {language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};
export default LanguageSwitcher;
