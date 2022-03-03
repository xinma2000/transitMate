import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
          <TouchableOpacity
            onPress = {() => navigation.navigate("Home")}
          >
            <Image
              source ={images.Logo}
              style={{
                width: 50,
                height: 50,
              }}
            />
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
          <Text style={styles.titleFonts}>My Current Location</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker coordinate =
              {{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
            />
          </MapView>
        </View>
        <View style ={styles.buttonContainer}>
          <TouchableOpacity
            style ={styles.buttonStyle}
            underlayColor='#fff'
            onPress = {() => navigation.navigate("EmergencyContacts", {newFriendsData: []})}
          >
            <Text style = {styles.buttonTextStyle}>Send to friends</Text>
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
    alignItems: 'center',
    marginTop: 30
  },
  bodyContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFonts: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  map: {
    marginTop: 10,
    width: width*0.9,
    height: height*0.7,
  },
  buttonStyle: {
    backgroundColor: '#FFD64D',
    borderRadius: 8,
    height: 60,
    width: width*0.9,
    alignItems: 'center',
    justifyContent: 'center'
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

export default MyLocation;
