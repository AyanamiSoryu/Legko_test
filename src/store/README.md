# Project Documentation

## Favorite Feature

### `favoriteHook.ts`
This file contains a custom hook `useFavorites`, which is used to manage favorite items in the application.

#### **Imports**
- `useDispatch` and `useSelector` from `react-redux` for accessing the Redux store.
- `RootState` for type safety when accessing the Redux store state.
- `toggleFavorite` action from `favoriteSlicer` to update the favorite list.

#### **Hook: `useFavorites`**
- Retrieves the `favorites` list from the Redux store.
- Provides a function `toggle(id: string)` to add or remove an item from favorites.

#### **Exports**
- The `useFavorites` hook is exported as the default export.

---

### `favoriteSlicer.ts`
This file contains the Redux slice for managing favorite items, using Redux Toolkit.

#### **Imports**
- `AsyncStorage` for storing favorite items persistently.
- `createSlice` and `PayloadAction` from `@reduxjs/toolkit`.

#### **State Structure**
- `favorites`: An array of strings representing favorite item IDs.

#### **Reducers**
- `setFavorites`: Replaces the entire favorites list and saves it in `AsyncStorage`.
- `toggleFavorite`: Adds or removes an item from the favorites list, updating `AsyncStorage`.
- `loadFavorites`: Initializes the state with saved favorites.

#### **Exports**
- `setFavorites`, `toggleFavorite`, and `loadFavorites` actions.
- The `favoritesSlice` reducer as the default export.

---

## Search Feature

### `searchHooks.ts`
This file contains custom hooks for managing the search query in the Redux store.

#### **Imports**
- `useCallback` for memoizing functions.
- `useDispatch`, `useSelector` for Redux state management.
- `RootState` for type safety.
- `setQuery` action from `searchSlice`.

#### **Hooks**
- `useQuery`: Returns the current search query from the store.
- `useSetQuery`: Dispatches the `setQuery` action with a new query.

---

### `searchSlice.ts`
Defines the Redux slice for search functionality.

#### **State Structure**
- `query`: A string representing the current search query.

#### **Reducers**
- `setQuery`: Updates the search query in the Redux state.

#### **Exports**
- `setQuery` action.
- The `searchSlice` reducer as the default export.

---

## Store Configuration

### `store.ts`
This file sets up the Redux store and integrates it with `AsyncStorage`.

#### **Imports**
- `AsyncStorage` for persistent storage.
- `configureStore` from Redux Toolkit.
- `useDispatch` for typed dispatch.
- Reducers from `favoriteSlicer` and `searchSlice`.

#### **Store Setup**
- Combines `favorites` and `search` reducers.
- Exports `store`, `RootState`, and a typed `useAppDispatch` hook.

#### **AsyncStorage Integration**
- Retrieves stored favorites from `AsyncStorage` and initializes the Redux state.

---
