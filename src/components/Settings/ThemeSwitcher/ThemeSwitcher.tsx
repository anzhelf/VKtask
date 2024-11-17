import { SunMoon } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../redux/slices/settingsSlice';
import type { RootState } from '../../../redux/store';
import styles from '../Settings.module.scss';

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.settings.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className={styles.settings__button} onClick={handleToggleTheme}>
      {theme === 'light' ? (
        <SunMoon color="black" />
      ) : (
        <SunMoon color="white" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
