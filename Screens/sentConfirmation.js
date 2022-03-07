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
          <Image
            source ={images.check}
            style={{
              width: 140,
              height: 140,
              marginBottom: 10,
            }}
          />
          <Text style={styles.confirmationText}>{route.params.title}</Text>
        </View>
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
    marginVertical: 15,
  },
  bodyFonts: {
    fontSize: 18,
    textAlign: 'center'
  },
  confirmationText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default SentConfirmation;
