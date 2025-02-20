import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../../route';

const useEventDetailsRoute = () => {
  return useRoute<RouteProp<RootStackParamList, 'EventDetails'>>();
};

export default useEventDetailsRoute;
