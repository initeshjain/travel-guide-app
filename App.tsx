// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GuideList from './components/GuideList';
import AddPlace from './components/AddPlace';
import PlaceView from './components/PlaceView';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GuideList">
        <Stack.Screen name="GuideList" component={GuideList} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
        <Stack.Screen name="PlaceView" component={PlaceView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
