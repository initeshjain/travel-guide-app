import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListView from './components/ListView';
import PlaceView from './components/PlaceView';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListView">
        <Stack.Screen name="ListView" component={ListView} options={{ title: 'Places to visit' }} />
        <Stack.Screen name="PlaceView" component={PlaceView} options={{ title: 'Place' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
