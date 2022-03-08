import React, {useState} from 'react';
import { TextInput, Alert, Dimensions, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from "react-native-maps";
import images from "../Constants/images";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const friendsData = [
  {
    name: "Angela",
    profilePic: images.AngelaPicAct,
    location: images.AngelaLoc,
    latitude: 37.3346,
    longitdue: -122.0090
  },
  { name: "Ben", 
    profilePic: images.BenPicAct, 
    location: images.BenLoc,
    latitude: 37.7956,
    longitude: -122.3935 },
  {
    name: "Christine",
    profilePic: images.ChristinePicAct,
    location: images.ChristineLoc,
    latitude: 37.7956,
    longitude: -122.3935 
  },
  { name: "Jess", 
    profilePic: images.JessPic, 
    location: images.JessLoc,
    latitude:37.4139,
    latitude: -122.1258 
  },
  { name: "David", 
    profilePic: images.DavidPic, 
    location: images.DavidLoc,
    latitude: 37.4268,
    longitude: -122.1671 
  },
  { name: "Timmy", 
    profilePic: images.TimmyPic, 
    location: images.TimmyLoc,
    latitude: 37.4365,
    longtidue: -122.1568 
  },
];
const FriendsLocation  = ({ route , navigation }) => {

  const [friendName, setFriendName] = React.useState(null);
  const [photo, setPhoto] = React.useState(null);
const [longitdue, setLongitude] = useState(null);
const [latitude, setLatitude] = useState(null);
  React.useEffect(() => {
    let {name, photo, longitude, latitude} = route.params;
    setFriendName(name);
    setLatitude(latitude);
    setLongitude(longitude);
    setPhoto(photo);
  })
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            underlayColor='#fff'
            onPress = {() => navigation.goBack()}
          >
            <Icon
              name = "arrow-back"
              type = "ionicon"
              size = {30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}>
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
          >
            <Icon
              name = "setting"
              type = "antdesign"
              size = {30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          {friendName == "See/Request A Friend\'s Location"?
          <>
            <Text style={styles.titleFonts}>Recently shared location</Text>
            <TextInput
              placeholder="🔍 Search friends"
              style={styles.textInput}
            />
          </> :
          <View>
            <Text> Viewing Location </Text>
           <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.771707,
              longitude: -122.4053769,
              latitudeDelta: 0.322,
              longitudeDelta: 0.2421,
            }}/>

            </View>
          
}
          {friendName == "See/Request A Friends\' Locations"?
           <TouchableOpacity
           style ={styles.buttonStyle}
           underlayColor='#fff'
           onPress = {() => navigation.navigate("EmergencyContacts", {newFriendsData: [], title:"Request Location From"})}
         >
           <Text style = {styles.buttonTextStyle}>Request Friends' Locations</Text>
         </TouchableOpacity>: null}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.05,
    marginHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  bodyContainer: {
    marginVertical: 10,
    alignItems: 'center'
  },
  titleFonts: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  map: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.7,
  },
  textInput: {
    height: 50,
    width: width*0.9,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: "#FFD64D",
    borderRadius: 8,
    height: 60,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  buttonTextStyle: {
    color: 'black',
    margin: 10,
    fontWeight: '600',
    fontSize: 20
  },
  map: {
    marginTop: 10,
    width: width*0.9,
    height: height*0.7,
  },

});

export default FriendsLocation;
