import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SeedsInfo from '../screens/SeedsInfo'
const Stack = createStackNavigator();
const MainStacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'স্বাগতম' }}
        />
        <Stack.Screen
          name="SeedsInfo"
          component={SeedsInfo}
          options={{ title: 'বীজের তথ্যাবলি' }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStacks;