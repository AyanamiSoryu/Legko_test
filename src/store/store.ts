import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import favoriteSlicer, { loadFavorites } from './favoriteSlicer/favoriteSlicer';
import searchReducer from './searchSlice/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoriteSlicer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

AsyncStorage.getItem('favorites').then((data) => {
  if (data) {
    store.dispatch(loadFavorites(JSON.parse(data)));
  }
});
