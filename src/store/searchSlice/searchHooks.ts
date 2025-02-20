import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store';
import { setQuery } from './searchSlice';

export const useQuery = () => useSelector((state: RootState) => state.search.query);

export const useSetQuery = () => {
  const dispatch = useDispatch();
  return useCallback(
    (newQuery: string) => {
      dispatch(setQuery(newQuery));
    },
    [dispatch]
  );
};
