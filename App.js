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
import CheckPoints from './Screens/checkPoints';
import NotSafe from './Screens/notSafe';
import AllFriendsLocation from './Screens/allFriendsLocation';
import PostConfirmation from './Screens/postConfirmation';
import ModeSelection from './Screens/modeSelection';
import RouteConfirmation from './Screens/routeConfirmation';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './Screens/appContext';
import  images  from './Constants/images';

const Stack = createStackNavigator();


export default function App() {
  const [onRoute, setOnRoute] = useState(false);
  const toggleOnRoute = () => {
      setOnRoute(true)
  }

  const [contactsData, setContactsData] = useState([
    {
      name: "Angela",
      profilePic: images.AngelaPic,
      location: images.AngelaLoc,
      checked: false,
    },
    {
      name: "Ben",
      profilePic: images.BenPic,
      location: images.BenLoc,
      checked: false,
    },
    {
      name: "Christine",
      profilePic: images.ChristinePic,
      location: images.ChristineLoc,
      checked: false,
    },
    {
      name: "Jess",
      profilePic: images.JessPic,
      location: images.JessLoc,
      checked: false,
    },
    {
      name: "David",
      profilePic: images.DavidPic,
      location: images.DavidLoc,
      checked: false,
    },
    {
      name: "Timmy",
      profilePic: images.TimmyPic,
      location: images.TimmyLoc,
      checked: false,
    },
  ]);

  const notOnRoute = () => {
    setOnRoute(false)
  }

  const [counter, setCounter] = useState(0);
  //increment checkpoints that have been completed
  const increment = () => {
    setCounter(counter+1)
   
  }
  //number of markers used (utilized in checkPoints)
  const [numMarkers, setNumMarkers] = useState(0);
  const regNumMarkers = (num) => {
    console.log("app.js regnumMarkers", num);
    setNumMarkers(num);
  }
  //destination of the trip
  const [destination, setDestination] = useState(null);
  const changeDestination = (destination) => {
      setDestination(destination)
  }
  //origin of the trip
  const [origin, setOrigin] = useState(null);
  const changeOrigin = (origin) => {
      setOrigin(origin)
  }
  //coordinate list of markers
  const [markers, setMarkers] = useState([]);
  const changeMarkers = (markers) => {
    setMarkers(markers)
  }

  return (
    <AppContext.Provider value={{
      onRoute, toggleOnRoute, notOnRoute,
      destination,changeDestination, 
      origin, changeOrigin, 
      markers, changeMarkers, 
      counter, increment, 
      numMarkers, regNumMarkers,
      contactsData
      }}>
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
        <Stack.Screen name="NotSafe" component={NotSafe} />
        <Stack.Screen name="CheckPoints" component={CheckPoints} />
        <Stack.Screen name="ModeSelection" component={ModeSelection} />
        <Stack.Screen name="RouteConfirmation" component={RouteConfirmation} />
        <Stack.Screen name="AllFriendsLocation" component={AllFriendsLocation} />
        <Stack.Screen name="PostConfirmation" component={PostConfirmation} />
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
