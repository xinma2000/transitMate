import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import * as Progress from 'react-native-progress';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Confirmation  = ({ navigation }) => {
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
          <TouchableOpacity underlayColor="#fff" onPress={() => navigation.navigate("Home")}>
            <Icon name="home" type="simplelineicons" size={30} />
          </TouchableOpacity>
        </View>
        <Progress.Bar progress={0.3} width={200} />

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

export default Confirmation;
