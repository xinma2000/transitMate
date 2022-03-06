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
      <TouchableOpacity
        style = {styles.picName}
        onPress = {() =>
          navigation.navigate("FriendsStatus", {friend: friend, name: friend.name, startLat: friend.startLat, startLng: friend.startLng, endLat: friend.endLat, endLng: friend.endLng})}>
        <Image
          source={friend.profilePic}
          style={{
            width: 55,
            height: 55,
          }}
        />
        <Text style={styles.bodyFonts}>{friend.name}</Text>
      </TouchableOpacity>
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
          <Text style={styles.titleFonts}>Friends' Routes</Text>
          <FlatList
            key={"$"}
            keyExtractor={(item, index) => String(index)}
            data={routesData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{}} />}
            style={{
              marginTop: 15,
              width: width * 0.9,
              height: height * 0.5,
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
  bodyFonts: {
    fontSize: 20,
    marginLeft: 8,
  },
  item: {
    marginBottom: 15
  },
  picName: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default FriendsRoutes;
