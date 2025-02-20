import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoriteState = {
  favorites: Array<string>;
};

const initialState: FavoriteState = {
  favorites: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<string[]>) => {
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
      return { ...state, favorites: action.payload };
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        return { ...state, favorites: state.favorites.filter((id) => id !== action.payload) };
      }
      state.favorites.push(action.payload);

      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    loadFavorites: (state, action: PayloadAction<string[]>) => {
      return { ...state, favorites: action.payload };
    }
  }
});

export const { setFavorites, toggleFavorite, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
