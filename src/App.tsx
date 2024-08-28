import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Navigation from './components/Navigation/Navigation';
import Settings from './components/Settings/Settings';
import { useFetchGenres } from './hooks/useFetchGenres';
import { useFetchMovies } from './hooks/useFetchMovies';
import type { RootState } from './redux/store';
import { darkTheme, lightTheme } from './theme';

function App() {
  const theme = useSelector((state: RootState) => state.settings.theme);
  useFetchMovies();
  useFetchGenres();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <div className={styles.content}>
        <Settings />
        <Navigation />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
