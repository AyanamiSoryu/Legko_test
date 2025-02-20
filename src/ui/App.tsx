import '../i18n';

import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/store';
import { Navigation } from './route';

Asset.loadAsync([...NavigationAssets, require('../assets/newspaper.png'), require('../assets/bell.png')]);

SplashScreen.preventAutoHideAsync();

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation
        linking={{
          enabled: 'auto',
          prefixes: [
            // Change the scheme to match your app's scheme defined in app.json
          ]
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </Provider>
  );
};
