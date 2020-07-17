import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/TabTwo_Screen1';
import Screen2 from '../screens/TabTwo_Screen2';
import Screen3 from '../screens/TabTwo_Screen3';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Screen1'}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}
