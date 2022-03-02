import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';
const width = Dimensions.get('window').width;


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
            }}>
              <Marker coordinate = {{
                  latitude: 37.78825,
                  longitude: -122.4324,
              }}/>
            </MapView>
            <View  style ={styles.buttonContiner}>
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
  },
  buttonContiner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 10
  }
 
});

export default MyLocation;
