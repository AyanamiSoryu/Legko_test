import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageSourcePropType } from 'react-native';

import EventDetails from './pages/EventDetails/EventDetails';
import EventList from './pages/EventList/EventList';

const RootStack = createNativeStackNavigator({
  screens: {
    EventList: {
      screen: EventList,
      options: {
        title: 'EventList',
        headerShown: false
      }
    },

    EventDetails: {
      screen: EventDetails,
      options: {
        title: 'EventDetails',
        headerShown: false
      }
    }
  }
});

export const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = {
  EventList: undefined;
  EventDetails: { id: number; date: string; title: string; description: string; image: ImageSourcePropType };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
