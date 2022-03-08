import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import { Marker } from "react-native-maps";
import images from "../Constants/images";
import MapView from "react-native-maps";
import RouteConfirmation from "./routeConfirmation";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AllFriendsLocation = ({ route, navigation }) => {

    
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
          <Text style={styles.titleFonts}>Viewing Friends' Last Shared Locations</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.4275,
              longitude: -122.1697,
              latitudeDelta: 0.122,
              longitudeDelta: 0.2421,
            }}
          >
            {route.params.friendsData.map((item, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}
                  title={item.name}
                  description={item.time}
                >
                  <Image
                    source={item.profilePic}
                    style={{
                      borderColor: "black",
                      borderWidth: 5,
                      borderRadius: 40,
                      height: 50,
                      width: 50,
                    }}
                  />
                </Marker>
              );
            })}
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            underlayColor="#fff"
            onPress={() =>
              navigation.navigate("EmergencyContacts", {
                newFriendsData: [],
                title: "Request Location",
              })
            }
          >
            <Text style={styles.buttonTextStyle}>Request Friends' Locations</Text>
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
    fontSize: 20,
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
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
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

export default AllFriendsLocation;
