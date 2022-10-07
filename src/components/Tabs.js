import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MovieScreen from './screens/MovieScreen';

const FirstRoute = () => (
  <MovieScreen style={{ flex: 1, backgroundColor: '#fff' }} />
);

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#fff' }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Tabs = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Movies' },
    { key: 'second', title: 'TV Shows' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      navigation={navigation}
    />
  );
};

export default Tabs;
