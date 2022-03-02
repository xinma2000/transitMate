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
              width: 0.9*width,
              height: 575,
              alignSelf: 'center',
              marginTop: 15,
            }}
          />
          {friendName == "See/Request A Friend\'s Location"?
          <Button
            title="Request Friends' Location"
            titleStyle={{ color: 'black', margin: 10, fontWeight: '600' }}
            buttonStyle={{ backgroundColor: '#FFD64D', borderRadius: 8,}}
            containerStyle={{ marginTop: 15, height: 60, width: width*0.9,}}
            onPress={() => Alert.alert(' Button pressed')}
          /> : null}
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
    height: 45,
    width: width*0.9,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  
});

export default FriendsLocation;
