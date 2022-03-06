import React, {useState} from 'react';
import { TextInput, Alert, Dimensions, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import  images  from '../Constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FriendsLocation  = ({ route , navigation }) => {

  const [friendName, setFriendName] = React.useState(null);
  const [photo, setPhoto] = React.useState(null);

  React.useEffect(() => {
    let {name, location} = route.params;
    setFriendName(name)
    setPhoto(location)
  })
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
            onPress={() => navigation.navigate("Home")}>
            <Image
              source ={images.Logo}
              style={{
                width: 55,
                height: 55,
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
        <View style={styles.bodyContainer}>
          {friendName == "See/Request A Friend\'s Location"?
          <>
            <Text style={styles.titleFonts}>Recently shared location</Text>
            <TextInput
              placeholder="🔍 Search friends"
              style={styles.textInput}
            />
          </> :
          <Text style={styles.titleFonts}>Viewing {friendName}'s Location</Text>}
          <Image
            source={photo}
            resizeMode="cover"
            style={{
              marginTop: 10,
              width: width*0.9,
              height: height*0.65,
              alignSelf: 'center',
            }}
          />
          {friendName == "See/Request A Friend\'s Location"?
           <TouchableOpacity
           style ={styles.buttonStyle}
           underlayColor='#fff'
           onPress = {() => navigation.navigate("EmergencyContacts", {newFriendsData: [], title:"Request Location From"})}
         >
           <Text style = {styles.buttonTextStyle}>Request Friends' Location</Text>
         </TouchableOpacity>: null}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.05,
    marginHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  bodyContainer: {
    marginVertical: 10,
    alignItems: 'center'
  },
  titleFonts: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textInput: {
    height: 50,
    width: width*0.9,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: "#FFD64D",
    borderRadius: 8,
    height: 60,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  buttonTextStyle: {
    color: 'black',
    margin: 10,
    fontWeight: '600',
    fontSize: 20
  },
  map: {
    marginTop: 10,
    width: width*0.9,
    height: height*0.7,
  },

});

export default FriendsLocation;
