import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/home';
import Contacts from './Screens/contacts';
import SentConfirmation from './Screens/sentConfirmation';
import EmergencyContacts from './Screens/emergencyContacts';
import CreateRoute from './Screens/createRoute'
import MyLocation from './Screens/myLocation';
import FriendsLocation from './Screens/friendsLocation';
import RouteView from './Screens/routeView';
import Confirmation from './Screens/confirmation';
import SavedRoutes from './Screens/savedRoutes';
import SavedList from './Screens/savedList';
import FriendsRoutes from './Screens/friendsRoutes';
import FriendsStatus from './Screens/friendsStatus';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './Screens/appContext';
import  images  from './Constants/images';

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
        <Stack.Screen name="EmergencyContacts" component={EmergencyContacts}/>
        <Stack.Screen name="SentConfirmation" component={SentConfirmation}/>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="RouteView" component={RouteView}/>
        <Stack.Screen name="Confirmation" component={Confirmation}/>
        <Stack.Screen name="SavedList" component={SavedList} />
        <Stack.Screen name="SavedRoutes" component={SavedRoutes} />
        <Stack.Screen name="FriendsRoutes" component={FriendsRoutes} />
        <Stack.Screen name="FriendsStatus" component={FriendsStatus} />

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
