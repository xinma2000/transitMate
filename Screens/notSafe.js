import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,

}from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';
import { StatusBar} from 'expo-status-bar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Progress = ({step, steps, height}) => {

  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width])

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth)
      }}
      style={{
        height,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <Animated.View
        style={{
          height,
          width: '100%',
          backgroundColor: '#FF4051',
          borderRadius: 8,
          position: 'absolute',
          left: 0,
          top: 0,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      />
    </View>
  )
}

const NotSafe  = ({ navigation }) => {

  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1));
      console.log("index", index)
    }, 1000)

    if (index === 10)
      clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [index]);


  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image
              source ={images.Logo}
              style={{
                width: 55,
                height: 55,
              }}>
            </Image>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.notSafeText}>You don't feel safe.</Text>

          <View style={styles.contacting}>
            <Text style={styles.bodyFonts}>Contacting your emergency list...</Text>
            <View style={styles.progressBarContainer}>
              <StatusBar hidden />
              <Progress step={index} steps={10} height={40}/>
            </View>
            <Text style={styles.bodyFonts}>An alert is being sent out to your emergency contacts to get you the help you need. </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              underlayColor="#fff"
            >
              <Text style={styles.notSafeText}>Don't contact yet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  bodyContainer: {
    marginTop: height*0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  notSafeText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  contacting:{
    marginTop: 50,
  },
  bodyFonts: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 45,
  },
  progressBarContainer: {
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: "#3FE465",
    borderRadius: 8,
    height: 125,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: height*0.15,
  },
});

export default NotSafe;
