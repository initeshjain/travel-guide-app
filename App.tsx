// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import GuideList from './components/GuideList';
// import AddPlace from './components/AddPlace';
// import PlaceView from './components/PlaceView';
import MapScreen from './components/MapView';
import SpotDetailScreen from './components/SpotDetailsView';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        {/* <Stack.Screen name="GuideList" component={GuideList} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
        <Stack.Screen name="PlaceView" component={PlaceView} /> */}
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Tourist Map' }} />
        <Stack.Screen name="SpotDetail" component={SpotDetailScreen} options={{ title: 'Spot Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
