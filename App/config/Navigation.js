import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CurrencyList from "../screens/CurrencyList"
import Home from '../screens/Home';
import Options from '../screens/options';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen name="CurrencyList" component={CurrencyList}/>
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);