import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import SplashScreen from '../screens/SplashScreen';
import ListScreen from '../screens/ListScreen';
import AddScreen from '../screens/AddScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="ListScreen" component={ListScreen} options={{headerShown: false}} />
          <Stack.Screen name="AddScreen" component={AddScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;