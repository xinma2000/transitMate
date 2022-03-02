import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Marker } from 'react-native-maps';
import  images  from '../Constants/images';
import MapView from 'react-native-maps';


const SentConfirmation  = ({ navigation }) => {
  const Item = ({ title, profilePic }) => (
    <View style={styles.item}>
       <Image
            source = {profilePic}
            style ={{
              width: 62,
              height: 62,
              marginBottom: 5,
            }}
          />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} profilePic={item.profilePic}/>;

  
  const friendsData = [
    {name: "Angela", profilePic: images.AngelaPic, location: images.AngelaLoc, },
    {name: "Ben", profilePic: images.BenPic, location: images.BenLoc, },
    {name: "Christine", profilePic: images.ChristinePic, location: images.ChristineLoc, },
    {name: "Jess", profilePic: images.JessPic, location: images.JessLoc, },
    {name: "David", profilePic: images.DavidPic, location: images.DavidLoc},
    {name: "Timmy", profilePic: images.TimmyPic, location: images.TimmyLoc},
  ]
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
          
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
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
  map: {
    marginLeft: 10,
    marginTop: 10,
    width: 400,
    height: 700,
  },
  item: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
 
});

export default SentConfirmation;