import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import  images  from '../Constants/images'

const FriendsLocation  = ({ route , navigation }) => {
    const [friendName, setFriendName] = React.useState(null);
    const [photo, setPhoto] = React.useState(null);
    React.useEffect(() => {
      let {name, image} = route.params;
      setFriendName(name)
      setPhoto(image)
    })
    console.log(friendName)
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
            width: 50,
            height: 50,
        }}></Image>
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
            {friendName == "see friends location" ? 
            <Text style={styles.titleFonts}>Recently shared location</Text>: 
            <Text style={styles.titleFonts}>View {friendName}'s recent location</Text>}
            <Image
                        source={photo}
                        resizeMode="cover"
                        style={{
                            width: 344,
                            height: 516,
                            marginLeft: 15
                        }}
                    />
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0
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

export default FriendsLocation;