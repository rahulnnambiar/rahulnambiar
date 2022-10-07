
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MovieScreen from '../screens/MovieScreen';
import { Text } from 'native-base';
import TVShowsScreen from '../screens/TVShowsScreen';

const Tab = createMaterialTopTabNavigator();

const TabStacks = () => (
  <Tab.Navigator initialRouteName="MoviesScreen">
    <Tab.Screen
      name="MoviesScreen"
      component={MovieScreen}
      options={{
        title: () => <Text>Movies</Text>,
      }}
    />
    
    <Tab.Screen
      name="TV Shows"
      component={TVShowsScreen}
      options={{
        title: () => <Text>TV Shows</Text>,
      }}
    />
  </Tab.Navigator>
);

export default TabStacks;
