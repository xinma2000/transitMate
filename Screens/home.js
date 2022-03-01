import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import FriendsLocation from './friendsLocation';
import myLocation from './myLocation'
import images from '../Constants/images';
import AppContext from './appContext';
import Svg, { Circle } from 'react-native-svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//https://reactnativeelements.com/docs/1.2.0/card
const Home  = ({ navigation }) => {

  const [scroll, setScroll] = useState(false);
  const myContext = useContext(AppContext);
  console.log(myContext)
  const [buttons] = useState([
    {name: 'Send My Location', icon:"location", type: "entypo", page: "MyLocation"},
    {name:'See/Request A Friend\'s Location', icon:"people", type: "ionicon", page: "FriendsLocation", image:images.FriendsLocation},
    {name:'View Friends\' Ongoing Routes', icon: "route", type: "fontawesome"},
    {name:'Manage Emergency List', icon: "list-outline", type: "ionicon"}
  ]);

  const friendsData = [
    {name: "Angela", profilePic: images.AngelaPic, images:images.Angela},
    {name: "Ben", profilePic: images.BenPic, image:images.Ben},
    {name: "Christine", profilePic: images.ChristinePic, image:images.Christine},
    {name: "Jess", profilePic: images.JessPic, image:images.Jess},
    {name: "David", profilePic: images.DavidPic},
    {name: "Timmy", profilePic: images.TimmyPic},
  ]

  const renderItem = (item, index, separators) => {
    return (
      <View>
        <Card
          key={index}
          containerStyle={{
            marginTop: 15,
            width: 170,
            height: 170,
            backgroundColor: "#FFD64D",
            borderRadius: 10,
            shadowOffset: {width: 2, height: 2,},
            shadowColor: 'black',
            shadowOpacity: 0.1,
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style = {styles.buttonContainer}
            underlayColor='#fff'
            onPress = {() => item.item.page == "FriendsLocation" ? navigation.navigate(item.item.page, {name: item.item.name, image: item.item.image}): navigation.navigate(item.item.page)}
          >
            <Icon
              name = {item.item.icon}
              type = {item.item.type}
              size = {75}
            />
            <Text style={styles.bodyFonts}>{item.item.name}</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }

  const renderFriends= (item, index, separators) => {
    return (
      <View>
        <TouchableOpacity
          onPress = {() => navigation.navigate('FriendsLocation', {name: item.item.name, image: item.item.image})}
          style={styles.iconContainer}
        >
          {console.log("hello" + item.item.image)}
          <Image
            source = {item.item.profilePic}
            style ={{
              width: 62,
              height: 62,
              marginBottom: 5,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{item.item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.homeHeaderContainer}>
          <TouchableOpacity>
            <Image
              source ={images.Logo}
              style={{
                width: 55,
                height: 55,
              }}>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity underlayColor='#fff'>
            <Icon
              name = "setting"
              type = "antdesign"
              size = {30}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20}}>
          <Text style={styles.titleFonts}>Tap to see friends' last shared location</Text>
          <FlatList
            horizontal
            key={'$'}
            keyExtractor={item => "$" + item.name}
            data={friendsData}
            renderItem={renderFriends}
            ItemSeparatorComponent={() => <View style={{ paddingHorizontal: 13 }} />}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10 }}
          />
        </View>
        <View>
          <Text style={styles.titleFonts}>Ongoing route</Text>
          {myContext.onRoute ?
          <Text style={styles.titleFonts}>Route</Text>:
          <TouchableOpacity
            onPress = {() => navigation.navigate('CreateRoute')}
            style={styles.createRouteContainer}
          >
            <Icon
              name = "pluscircleo"
              type ='antdesign'
              size = {45}
            />
            <Text style={styles.createRouteFont}>Create Route</Text>
          </TouchableOpacity>}
        </View>
        <Text style={styles.titleFonts}>What would you like to do?</Text>
        <FlatList
          key={'#'}
          keyExtractor={item => "#" + item.name}
          data={buttons}
          renderItem={renderItem}
          numColumns={2}
          scrollEnabled={scroll}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.05,
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 0.42*width,
    justifyContent: 'space-between',
  },
  createRouteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 145,
    marginTop: 10,
    marginBottom: 30,
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  createRouteFont: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '500'
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyFonts: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: 'center',
    marginTop: 10,
  },
  titleFonts: {
    fontSize: 17,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default Home;
