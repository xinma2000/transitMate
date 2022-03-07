import { NavigationContainer, useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import FriendsLocation from './friendsLocation';
import myLocation from './myLocation'
import images from '../Constants/images';
import AppContext from './appContext';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Svg, { Circle } from 'react-native-svg';
import { Marker } from "react-native-maps";

const GOOGLE_MAPS_APIKEY = "AIzaSyBV_EvsR_SI9az9aAUM_ch9UU3MswZAqJM";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//https://reactnativeelements.com/docs/1.2.0/card
const Home  = ({ navigation }) => {
  const [scroll, setScroll] = useState(false);
  const myContext = useContext(AppContext);
  const [onRoute, setOnRoute] = useState(myContext.onRoute);
  const isFocused = useIsFocused(); 

  React.useEffect(() => {
    setOnRoute(myContext.onRoute)
    console.log("dest is", myContext.destination)
    console.log("origin is", myContext.origin)
    console.log("myContext.onroute is", myContext.onRoute)
    console.log("mycontext at home is", onRoute)
    console.log("hello")
  })

  /*useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = API.subscribe(myContext.onRoute, onRoute => setOnRoute(myContext.onRoute));

      return () => unsubscribe();
    }, [myContext.onRoute])
  );*/


  const [buttons] = useState([
    {name: 'Send My Location', icon:"location", type: "entypo", page: "MyLocation"},
    {name:'See/Request A Friend\'s Location', icon:"people", type: "ionicon", page: "FriendsLocation", location: images.FriendsLocation, },
    {name:'View Friends\' Ongoing Routes', icon: "route", type: "fontawesome", page: "FriendsRoutes"},
    {name:'Manage Emergency List', icon: "list-outline", type: "ionicon", page: "EmergencyContacts"}
  ]);

  const friendsData = [
    {name: "Angela", profilePic: images.AngelaPicAct, location: images.AngelaLoc, },
    {name: "Ben", profilePic: images.BenPicAct, location: images.BenLoc, },
    {name: "Christine", profilePic: images.ChristinePicAct, location: images.ChristineLoc, },
    {name: "Jess", profilePic: images.JessPic, location: images.JessLoc, },
    {name: "David", profilePic: images.DavidPic, location: images.DavidLoc},
    {name: "Timmy", profilePic: images.TimmyPic, location: images.TimmyLoc},
  ]

  const renderItem = (item, index, separators) => {
    return (
      <View >
        <Card
          key={index}
          containerStyle={{
            marginTop: 15,
            width: 170,
            height: 170,
            backgroundColor: "#FFD64D",
            borderRadius: 10,
            shadowOffset: {width: 2, height: 2,},
            shadowColor: 'black',
            shadowOpacity: 0.1,
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style = {styles.buttonContainer}
            underlayColor='#fff'
            onPress = {() => item.item.page == "FriendsLocation" ? navigation.navigate(item.item.page, {name: item.item.name, location: item.item.location}): item.item.page === "EmergencyContacts"?  navigation.navigate(item.item.page, {newFriendsData: [], title:"Emergency Contacts"}) :navigation.navigate(item.item.page)}


          >
            <Icon
              name = {item.item.icon}
              type = {item.item.type}
              size = {75}
            />
            <Text style={styles.bodyFonts}>{item.item.name}</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

  const onPress = (item) => {
    /*if (item.item.page === "FriendsLocation") {
      navigation.navigate(item.item.page, {name: item.item.name, location: item.item.location})
    } else if (item.item.page === "EmergencyContacts") {
      navigation.navigate(item.item.page, {newFriendsData: [], title:"Emergency Contacts"})
    }
    else {
      navigation.navigate(item.item.page)
    }*/
    console.log(item)
  }

  const renderFriends= (item, index, separators) => {
    return (
      <View>
        <TouchableOpacity
          onPress = {() => navigation.navigate('FriendsLocation', {name: item.item.name, location: item.item.location})}
          style={styles.iconContainer}
        >
          <Image
            source = {item.item.profilePic}
            style ={{
              width: 62,
              height: 62,
              marginBottom: 5,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{item.item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.homeHeaderContainer}>
          <TouchableOpacity>
            <Image
              source ={images.Logo}
              style={{
                width: 55,
                height: 55,
              }}>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor='#fff'
            onPress = {() => navigation.navigate('NotSafe')}
          >
            <Icon
              name = "setting"
              type = "antdesign"
              size = {30}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20}}>
          <Text style={styles.titleFonts}>Tap to see friends' last shared location</Text>
          <FlatList
            horizontal
            key={'$'}
            keyExtractor={item => "$" + item.name}
            data={friendsData}
            renderItem={renderFriends}
            ItemSeparatorComponent={() => <View style={{ paddingHorizontal: 13 }} />}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10, }}
          />
        </View>
        <View>
          <Text style={styles.titleFonts}>Ongoing route</Text>
          {isFocused && onRoute? 
          <MapView
          style={styles.map}
          initialRegion={{
            latitude: myContext.origin.latitude,
            longitude: myContext.origin.longitude,
            latitudeDelta: 0.322,
            longitudeDelta: 0.2421,
          }}
        >
          <Marker coordinate={myContext.origin} />
          <Marker
            coordinate={myContext.destination}
          />
          {myContext.markers.map((item, index)=>{
       return  <Marker
       key={index}
       coordinate={{
         latitude:item.latitude,
         longitude: item.longitude,
       }}
       pinColor ='orange'
     />
   })}

          <MapViewDirections
            origin={myContext.origin}
            destination={ myContext.destination }
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        </MapView>:
          <TouchableOpacity
            onPress = {() => navigation.navigate('CreateRoute')}
            style={styles.createRouteContainer}
          >
            <Icon
              name = "pluscircleo"
              type ='antdesign'
              size = {45}
            />
            <Text style={styles.createRouteFont}>Create Route</Text>
          </TouchableOpacity>}
        </View>
        <Text style={styles.titleFonts}>What would you like to do?</Text>
        <FlatList
          key={'#'}
          keyExtractor={item => "#" + item.name}
          data={buttons}
          renderItem={renderItem}
          numColumns={2}
          scrollEnabled={scroll}
          style={styles.cardContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.05,
    marginHorizontal: 15,
  },
  cardContainer: {
    marginLeft: -2
  },
  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 0.4*width,
    justifyContent: 'space-between',
  },
  createRouteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    height: 145,
    marginTop: 10,
    marginBottom: 30,
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  createRouteFont: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '500'
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyFonts: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: 'center',
    marginTop: 10,
  },
  titleFonts: {
    fontSize: 17,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  map: {
    marginBottom: 10,
    width: width * 0.9,
    height: height * 0.23,
  },
});

export default Home;
