# Project Documentation

## Overview
This project is a React Native application designed to display and manage events. It features event listing, event details, sorting, language selection, and favorites management. The project uses Redux for state management, React Navigation for navigation, and Expo for asset handling and splash screen management.

## Installation
### Prerequisites
- Node.js (LTS version recommended)
- Expo CLI
- Yarn or npm
- Java (JDK >= v17)

## Running the app

- Install the dependencies:

  ```sh
  npm install
  ```

- Start the development server:

  ```sh
  npm start
  ```

- Build and run iOS and Android development builds:

  ```sh
  npm run ios
  # or
  npm run android
  ```

- In the terminal running the development server, press `i` to open the iOS simulator, `a` to open the Android device or emulator, or `w` to open the web browser.

## Project Structure
```
├── App.tsx
├── components
│   ├── Event
│   │   ├── EventCard.tsx
│   ├── EventBlock
│   │   ├── EventBlock.tsx
│   ├── Header
│   │   ├── Header.tsx
│   ├── LanguageSelection
│   │   ├── LanguageSelection.tsx
│   ├── SortByDate
│   │   ├── SortByDate.tsx
├── pages
│   ├── EventDetails
│   │   ├── EventDetails.tsx
│   ├── EventList
│   │   ├── EventList.tsx
│   ├── Home
│   │   ├── Home.tsx
├── store
│   ├── store.ts
│   ├── favoriteSlicer
│   │   ├── favoriteHook.ts
│   │   ├── favoriteSlice.ts
├── assets
│   ├── icons
│   ├── images
│   ├── mockData
├── utils
│   ├── chunkArray.ts
│   ├── hooks
│   │   ├── useAppNavigation.ts
│   │   ├── useEventDetailsRoute.ts
│   ├── imageRandomizer.ts
```

## Features
- **Event Listing:** Displays events in a scrollable list.
- **Event Details:** Shows detailed information about an event.
- **Favorites Management:** Allows users to add and remove events from favorites.
- **Sorting by Date:** Users can sort events by oldest, latest, or default order.
- **Language Selection:** Supports English and Russian.
- **Navigation:** Implements React Navigation for smooth user experience.

## Key Components
### `App.tsx`
- Initializes the application.
- Configures Redux provider.
- Loads assets and prevents splash screen auto-hide until navigation is ready.

### `EventCard.tsx`
- Displays an individual event.
- Supports different layout styles based on event size.
- Shows event title, date, and favorite status.

### `EventBlock.tsx`
- Renders a list of events using `FlatList`.
- Dynamically selects card sizes for better UI representation.

### `Header.tsx`
- Displays the app header with event listing title.
- Includes language selection.

### `LanguageSelection.tsx`
- Provides an option to switch between English and Russian languages using `react-i18next`.

### `SortByDate.tsx`
- Allows sorting events by date.
- Cycles between three sorting modes: oldest, latest, default.

### `EventDetails.tsx`
- Displays detailed information about an event.
- Allows adding/removing an event from favorites.
- Fetches event data dynamically based on language.

## State Management
The application uses Redux for managing global state.
- `store.ts`: Configures Redux store.
- `favoriteSlice.ts`: Handles adding/removing events from favorites.
- `favoriteHook.ts`: Provides a custom hook for accessing favorite state.

## Utilities
- `chunkArray.ts`: Splits event data into chunks for better display.
- `imageRandomizer.ts`: Randomly assigns images to events.
- `useAppNavigation.ts`: Custom hook for navigation.
- `useEventDetailsRoute.ts`: Custom hook for fetching event route parameters.

## Localization
The application supports multilingual functionality using `react-i18next`.
- Default language is English.
- Language can be switched to Russian via `LanguageSelection` component.
- Uses mock data files (`eventsEng.json`, `eventsRu.json`).


## Future Enhancements
- Implement user authentication.
- Add filtering options for events.
- Introduce additional languages.
- Optimize performance for large event lists.

---
This documentation provides an overview of the project, its features, and instructions for setup and usage. Further improvements and refinements can be made as the project evolves.

## Notes

This project uses a [development build](https://docs.expo.dev/develop/development-builds/introduction/) and cannot be run with [Expo Go](https://expo.dev/go). To run the app with Expo Go, edit the `package.json` file, remove the `expo-dev-client` package and `--dev-client` flag from the `start` script. However, Edge-to-edge won't work on Expo Go.

We highly recommend using the development builds for normal development and testing.

The `ios` and `android` folder are gitignored in the project by default as they are automatically generated during the build process ([Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)). This means that you should not edit these folders directly and use [config plugins](https://docs.expo.dev/config-plugins/) instead. However, if you need to edit these folders, you can remove them from the `.gitignore` file so that they are tracked by git.

## Resources

- [React Navigation documentation](https://reactnavigation.org/)
- [Expo documentation](https://docs.expo.dev/)

---

