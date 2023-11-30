import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListView from './components/ListView';
import PlaceView from './components/PlaceView';
import { route1Places, route2Places } from "./places"

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<RootTopTabParamList>();

const App: React.FC = () => {

  const tabScreenOptions = {
    tabBarActiveTintColor: '#074085',
    tabBarInactiveTintColor: 'gray',
    tabBarIndicatorStyle: {
      backgroundColor: '#074085', // Color of the active tab underline
    },
  };

  const TabNavigator: React.FC = () => (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Tab1"
        options={{ title: 'Taj Hotel to TCS' }}
      >
        {() => <ListView places={route1Places} />}
      </Tab.Screen>
      <Tab.Screen
        name="Tab2"
        options={{ title: 'TCS to Taj Hotel' }}
      >
        {() => <ListView places={route2Places} />}
      </Tab.Screen>
    </Tab.Navigator>
  );

  const stackScreenOptions = {
    headerStyle: {
      backgroundColor: '#074085'
    },
    headerTintColor: 'white',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListView" screenOptions={stackScreenOptions}>
        <Stack.Screen name="ListView" component={TabNavigator} options={{ title: 'Places to visit' }} />
        <Stack.Screen name="PlaceView" component={PlaceView} options={{ title: 'Place' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
