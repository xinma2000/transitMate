import React, {useState} from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity >
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
          {friendName == "see friends location" ?
          <Text style={styles.titleFonts}>Recently shared location</Text>:
          <Text style={styles.titleFonts}>Viewing {friendName}'s Location</Text>}
          <Image
            source={photo}
            resizeMode="cover"
            style={{
              width: 0.9*width,
              height: 600,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
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
    marginVertical: 20
  },
  titleFonts: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default FriendsLocation;
