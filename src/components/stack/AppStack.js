import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStacks from './TabStacks';
import DetailedScreen from '../screens/DetailedScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Index" component={TabStacks}
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailedScreen}
        options={{
          title: "Movies App",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTitleStyle: {
                  color: "#000",
              },
              headerBackTitle: "Back to List",
          }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;