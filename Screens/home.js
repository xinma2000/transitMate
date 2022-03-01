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

    const myContext = useContext(AppContext);
    console.log(myContext)
    const [buttons] = useState([
        {name: 'Send My Location', icon:"location", type: "entypo", page: "MyLocation"},
        {name:'See/Request A Friend\'s Location', icon:"people", type: "ionicon", page: "FriendsLocation", image:images.FriendsLocation},
        {name:'View Friends\' Ongoing Routes', icon: "route", type: "fontawesome"},
        {name:'Manage Emergency List', icon: "list-outline", type: "ionicon"}
    ]);

    const friendsData = [
        {name: "Angela", image:images.Angela},
        {name: "Ben", image:images.Ben},
        {name: "Christine", image:images.Christine},
        {name: "Jess", image:images.Jess},
        {name: "Jess", image:images.Jess},
        {name: "Jess", image:images.Jess},
    ]

    const renderItem = (item, index, separators) => {
        return (
          <View style={styles.cardStyle}>
            <Card
              key={index}
              containerStyle={{
                marginTop: 15,
                width: 150,
                height: 150,
                backgroundColor: "#FFD64D",
                borderRadius: 10,
              }}
            >
              <TouchableOpacity
                style={styles.loginScreenButton}
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
              <Icon
                name = "person-circle-outline"
                type ='ionicon'
                size = {60}
              />
              <Text>{item.item.name}</Text>
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
                width: 50,
                height: 50,
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
    marginBottom: 20,
  },
  createRouteFont: {
    marginLeft:10,
    fontSize: 16,
    fontWeight: '500'
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyFonts: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  titleFonts: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonStyle: {
    backgroundColor: "#FFD64D"
  },
});

export default Home;
