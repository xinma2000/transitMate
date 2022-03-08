import React, {useState} from 'react';
import { Dimensions, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SentConfirmation  = ({ route, navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.confirmationContainer}>
          {route.params.title == "Alert Sent!"?
            <Text style={styles.confirmationText}>{route.params.title}</Text>: null}
          <Image
            source ={images.check}
            style={{
              width: 140,
              height: 140,
              marginVertical: 10,
            }}
          />
          {route.params.title != "Alert Sent!"?
            <Text style={styles.confirmationText}>{route.params.title}</Text>: null}
        </View>
        {route.params.title == "Alert Sent!"?
          <Text style={styles.confirmationText}>Help is on the way.</Text>: null
        }
        <TouchableOpacity
          onPress = {() => navigation.navigate('Home')}
        >
          <Text style={styles.bodyFonts}>Go Back Home</Text>
        </TouchableOpacity>
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
  confirmationContainer: {
    marginTop: 0.35*height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyFonts: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },
  confirmationText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SentConfirmation;
