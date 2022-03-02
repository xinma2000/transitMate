import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';


const MyLocation  = ({ navigation }) => {
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
          <TouchableOpacity >
            <Image
              source ={images.Logo}
              style={{
                width: 50,
                height: 50,
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
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate = {{
              latitude: 37.78825,
              longitude: -122.4324,
          }}/>
        </MapView>
        <TouchableOpacity
          underlayColor='#fff'
          onPress = {() => navigation.navigate("EmergencyContacts", {newFriendsData: []})}
        >
          <Text>Send to friends</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  onGoingRoutes: {
    marginTop: 10,
  },
  bodyFonts: {
    fontSize: 14,
    marginBottom: 8,
  },
  titleFonts: {
    fontSize: 16,
    fontWeight: "500"
  },
  buttonStyle: {
      backgroundColor: "#FFD64D"
  },
  map: {
    marginLeft: 10,
    marginTop: 10,
    width: 400,
    height: 700,
  },
});

export default MyLocation;
