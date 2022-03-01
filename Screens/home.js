import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import FriendsLocation from './friendsLocation';
import myLocation from './myLocation'
import images from '../Constants/images';


//https://reactnativeelements.com/docs/1.2.0/card 
const Home  = ({ navigation }) => {

    const [buttons] = useState([
        {name: 'send my location', icon:"location", type: "entypo", page: "MyLocation"},
        {name:'see friends location', icon:"people", type: "ionicon", page: "FriendsLocation", image:images.FriendsLocation},
        {name:'View Friends ongoing Routes', icon: "route", type: "fontawesome"},
        {name:'Manage Emergnecy List', icon: "list-outline", type: "ionicon"}
    ]);

    const friendsData = [
        {name: "Angela", image:images.Angela},
        {name: "Ben", image:images.Ben},
        {name: "Christine", image:images.Christine},
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
              borderRadius: 8,}}
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
            <View >
                <TouchableOpacity
                    onPress = {() => navigation.navigate('FriendsLocation', {name: item.item.name, image: item.item.image})}
                    style={styles.iconContainer}
                >
                    {console.log("hello" + item.item.image)}
                <Icon
                    name = "person-circle-outline"
                    type ='ionicon'
                    size = {50}
                />
                <Text>{item.item.name}</Text>  
                </TouchableOpacity>
            </View>
        )
      }
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.titleFonts}>Tap to see friends' last shared location</Text>
            <FlatList 
                key={'$'}
                keyExtractor={item => "$" + item.name}
                data={friendsData}
                renderItem={renderFriends}
                numColumns={4}
            />
            <View style={styles.onGoingRoutes}>
                <Text style={styles.titleFonts}>On going route</Text>
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
    marginTop: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  friendsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
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

export default Home;