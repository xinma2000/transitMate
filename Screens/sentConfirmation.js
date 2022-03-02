import React, {useState} from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';


const SentConfirmation  = ({ navigation }) => {
  
  return (
    <>
    <View style={styles.container}>
      <View style={styles.confirmationContainer}>
      <Image
              source ={images.check}
              style={{
                width: 140,
                height: 140,
              }}>
        </Image>
      <Text style={styles.confirmationText}>Location sent!</Text>
      </View>
      <TouchableOpacity
            onPress = {() => navigation.navigate('Home')}
            style={styles.createRouteContainer}
          >
         
            <Text style={styles.buttonText}>Go Back Home</Text>
          </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
 
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
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
  confirmationText: {
    fontWeight: "600",
    fontSize: 26
  },
  item: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
 
});

export default SentConfirmation;