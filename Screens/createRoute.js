import AppContext from './appContext';
import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { images } from '../Constants/images'
import Svg, { Circle } from 'react-native-svg';

const CreateRoute  = ({ navigation }) => {
  return (
    <>
       <View style={styles.container}>
       <View style={styles.friendsContainer}>
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
          <Svg height="100"
               width="100"
               style={{alignItems: "center", justifyContent: 'center'}}>
            <Icon name="train" size={50} type = "materialicons"/>
            <Circle
              cx="50"
              cy="50"
              r="25"
              fill="#FFD64D"/>
          </Svg>
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

        <Text> Create route here </Text>
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  friendsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
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
  }
 
});

export default CreateRoute;