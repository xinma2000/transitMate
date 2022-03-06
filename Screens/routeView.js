import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppContext from './appContext';
import { Text, Card, Button, Icon } from "react-native-elements";
import { Marker } from "react-native-maps";
import images from "../Constants/images";
import MapView , { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const coordinates = [
  {
    latitude: 37.3318456,
    longitude: -122.0296002,
  },
  {
    latitude: 37.771707,
    longitude: -122.4053769,
  },
];
const GOOGLE_MAPS_APIKEY = "AIzaSyBV_EvsR_SI9az9aAUM_ch9UU3MswZAqJM"
const GOOGLE_MAPS_APITKEY_GEOCODING = "AIzaSyA4EvUX1w061o9J8CsYOYFWJWVfPZSSs0s"

const RouteView = ({ route, navigation }) => {
  const myContext = useContext(AppContext);

    Geocoder.init(GOOGLE_MAPS_APITKEY_GEOCODING)

    const [endPoint, setEndPoint] = useState(route.params.destination)
    const [destLat, setDestLat] = useState(0)
    const [destLng, setDestLng] = useState(0)
    const [dest, setDest] = useState(null)
    const [response, setResponse] = React.useState(null);
    const [centerLat, setCenterLat] = useState(0)
    const [centerLng, setCenterLng] = useState(0)
   
    React.useEffect(() => {
        Geocoder.from(endPoint)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log("location is", location)
                console.log("location latitude is", location.lat)
                setDest(location);
                setDestLat(location.lat);
                setDestLng(location.lng);
                var lat = (coordinates[1].latitude + destLat) / 2;
                var lng = (coordinates[1].longitude + destLng) / 2;
                setCenterLat(lat);
                setCenterLng(lng);

      })
      .catch(error => console.warn(error));
      }, [])

      const onPress = () => {
        navigation.navigate("EmergencyContacts", { newFriendsData: [], title: "hello" })
      }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            underlayColor="#fff"
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" type="ionicon" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={images.Logo}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity underlayColor="#fff">
            <Icon name="setting" type="antdesign" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.titleFonts}>Edit Checkpoint</Text>
          
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.1522,
              longitudeDelta: 0.0421,
            }}
          >

            <Marker coordinate = {coordinates[1]}/>
    <Marker coordinate = {{
        latitude: destLat,
        longitude: destLng
    }}/>
    {console.log("destinationLat is", destLat)}
    {console.log("destinationLng is", destLng)}
            <MapViewDirections
              origin={coordinates[1]}
              destination={{latitude: destLat, longitude: destLng}}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth = {3}
              strokeColor = "hotpink"
            />
            
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            underlayColor="#fff"
            onPress={() =>
              navigation.navigate("EmergencyContacts", { newFriendsData: [], title:"Send Route to" })
            }
          >
            <Text style={styles.buttonTextStyle}>Send to friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  bodyContainer: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleFonts: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  map: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.7,
  },
  buttonStyle: {
    backgroundColor: "#FFD64D",
    borderRadius: 8,
    height: 60,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  buttonTextStyle: {
    color: "black",
    margin: 10,
    fontWeight: "600",
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default RouteView;
