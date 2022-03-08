import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

import { Marker } from "react-native-maps";
import images from "../Constants/images";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const FriendsRoutes = ({ navigation }) => {

  const [routesData, setRoutesData] = useState([
    { name: "Angela", profilePic: images.AngelaPic, destination: "Apple Park", index: 1, checkPoint: "1 min ago", startLat:37.4435, startLng:-122.1713, endLat: 37.7956, endLng: -122.3935},
    { name: "Ben", profilePic: images.BenPic, destination: "Stanford University", index: 2, checkPoint: "now", startLat:37.4262, startLng: -122.1574, endLat: 37.7956, endLng: -122.3935},
    { name: "Jess", profilePic: images.JessPic, destination: "Golden Gate Park", index: 3, checkPoint: "5 mins ago", startLat:37.7694, startLng: -122.4862, endLat: 37.7841, endLng: -122.4064},
    ]);

  const Item = ({ friend }) => (
    <View style= {styles.item} key={friend.index}>
      <View style={styles.picName}>
        <Text style={styles.nameFont}>{friend.name}</Text>
        <Image
          source={friend.profilePic}
          style={{
            width: 75,
            height: 75,
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.destinationFont}>Destination: {friend.destination}</Text>
        <Text style={styles.checkpointFont}>Last checkpoint: {friend.checkPoint}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress = {() =>
              navigation.navigate("FriendsStatus", {friend: friend, name: friend.name, startLat: friend.startLat, startLng: friend.startLng, endLat: friend.endLat, endLng: friend.endLng})}
          >
            <Text style = {styles.buttonTextStyle}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item friend={item} />;

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
          <Text style={styles.titleFonts}>Friends' Ongoing Routes</Text>
          <FlatList
            key={"$"}
            keyExtractor={(item, index) => String(index)}
            data={routesData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{}} />}
            style={{
              marginTop: 15,
              width: width * 0.9,
              height: height * 0.9,
            }}

          />
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
  nameFont: {
    fontSize: 30,
    fontWeight: '500',
  },
  destinationFont: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'right',
  },
  checkpointFont: {
    marginTop: 10,
    fontSize: 17,
    color: 'gray',
    textAlign: 'right',
  },
  item: {
    marginBottom: 15,
    backgroundColor: 'white',
    height: 160,
    width: width*0.9,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  picName: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  info: {
    width: width*0.5,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#FFD64D',
    borderRadius: 8,
    height: 42,
    width: width*0.22,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  }
});

export default FriendsRoutes;
