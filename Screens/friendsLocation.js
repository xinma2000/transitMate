import React, { useState } from "react";
import {
  View,
  Alert,
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

const FriendLocation = ({ route, navigation }) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Requesting current location from",
      route.params.name,
      [
        {
          text: "Confirm",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Cancel", onPress: () => console.log("OK Pressed") }
      ]
    );

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
          <TouchableOpacity underlayColor="#fff" onPress={() => navigation.navigate("Home")}>
            <Icon name="home" type="simplelineicons" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.titleFonts}>
            Viewing {route.params.name}'s Last Shared Location
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: route.params.latitude,
              longitude: route.params.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: route.params.latitude,
                longitude: route.params.longitude,
              }}
              title={route.params.name}
              description={route.params.time}
            >
              <Image
                source={route.params.photo}
                style={{
                  borderColor: "black",
                  borderWidth: 2,
                  borderRadius: 40,
                  height: 60,
                  width:60
                }}
              />
              </Marker>
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Request Current Location"
            titleStyle={styles.buttonTextStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
            onPress={createTwoButtonAlert}
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
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  map: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.69,
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
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FriendLocation;
