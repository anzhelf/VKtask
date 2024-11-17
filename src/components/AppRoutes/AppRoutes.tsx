import { Route, Routes } from 'react-router-dom';
import CardPage from '../../pages/CardPage/CardPage';
import Home from '../../pages/Home/Home';
import Likes from '../../pages/Likes/Likes';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/likes" element={<Likes />} />
      <Route path="/movie/:id" element={<CardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
