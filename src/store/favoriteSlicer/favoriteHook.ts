import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { toggleFavorite } from './favoriteSlicer';

const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const toggle = (id: string) => dispatch(toggleFavorite(id));

  return { favorites, toggle };
};

export default useFavorites;
