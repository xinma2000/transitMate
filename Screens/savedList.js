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


const SavedList = ({ navigation }) => {
    const [routesData, setRoutesData] = useState([
        { destination: "Apple Park", index: 1 },
        { destination: "Stanford University", index: 2 },
        { destination: "Golden Gate Park", index: 3 },
      ]);

  const Item = ({ destination }) => (
    <View style={styles.item} key={destination.index}>
      <TouchableOpacity
      onPress = {() => navigation.navigate("SavedRoutes", {destination: destination.destination})}>
        <Text style={styles.titleText}>{destination.destination}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => <Item destination={item} />;

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
          <Text style={styles.titleFonts}>Saved Routes</Text>
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

export default SavedList;
