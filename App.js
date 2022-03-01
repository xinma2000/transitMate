import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/home';
import CreateRoute from './Screens/createRoute'
import MyLocation from './Screens/myLocation';
import FriendsLocation from './Screens/friendsLocation';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './Screens/appContext';

const Stack = createStackNavigator();


export default function App() {
  const [onRoute, setOnRoute] = useState(false);

  const userRouteStatus = {
    onRoute: onRoute,
    setOnRoute
  }

  return (
    <AppContext.Provider value={userRouteStatus}>
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={'Home'}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyLocation" component={MyLocation} />
        <Stack.Screen name="FriendsLocation" component={FriendsLocation} />
        <Stack.Screen name="CreateRoute" component={CreateRoute}/>
    </Stack.Navigator>
</NavigationContainer>
</AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
