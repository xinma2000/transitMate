import React, { useState, createContext } from 'react';
import { View, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Text, Button, CheckBox, Icon,  } from 'react-native-elements';
import  images  from '../Constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Contacts  = ({ route, navigation }) => {

  const Context = createContext();

  const Item = ({ friend }) => (
    <View style={styles.item} key={friend.name}>
    <View style={styles.friendIcon}>
     <Image
       source = {friend.profilePic}
       style ={{
         width: 62,
         height: 62,
         margin: 8,
       }}
     />
     <Text style={styles.titleText}>{friend.name}</Text>
     </View>
     <CheckBox
       center
       key={Math.random()}
       checked={friend.checked}
       onPress={() => addName(friend = {friend})}
       checkedColor = "black"
       uncheckedColor ="black"
     />
   </View>
  );

  const renderItem = ({ item }) => <Item friend={item}/>;

  const [friendsData, setFriendsData] = useState([
    {name: "Bri", profilePic: images.BriPic, location: images.AngelaLoc, checked: false},
    {name: "Kate", profilePic: images.KatePic, location: images.BenLoc, checked: false},
    {name: "Kyle", profilePic: images.KylePic, location: images.ChristineLoc, checked: false},
    {name: "Xavier", profilePic: images.XavierPic, location: images.JessLoc, checked: false},
    {name: "Courtney", profilePic: images.CourtneyPic, location: images.DavidLoc, checked: false},
    {name: "Nicole", profilePic: images.NicolePic, location: images.TimmyLoc, checked: false},
  ])
  const [chosen, setChosen] = useState([])
  const [friends, setFriends] = useState("")

  const addName = ({ friend }) => {
    const data = [ ...friendsData]
    const index = data.findIndex(x => x.name === friend.name)
    data[index].checked = !data[index].checked
    setFriendsData(data)
    if (data[index].checked) {
      setChosen ([
        ...chosen,
        data[index]
      ])
      let temp = friends
      const comma = ", "
      if (temp === "") {
        setFriends(data[index].name)
      }
      else {
        setFriends(friends + comma + data[index].name)
      }
    }
    else {
      const chosenData = [...chosen]
      const found = chosenData.findIndex(x => x.name === data[index].name)
      chosenData.splice(found, 1)
      setChosen(chosenData)
    }
  }

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
            onPress = {() => navigation.navigate("Home")}
          >
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
        <View style={styles.bodyContainer}>
          <Text style={styles.titleText}>Add Friends From Contacts</Text>
          <TextInput
            placeholder="🔍 Search friends"
            style={styles.textInput}
          />
        </View>
        <FlatList
          key={'$'}
          keyExtractor={(item, index) => String(index)}
          data={friendsData}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{}} />}
          style={{
            marginTop: 15,
            width: width * 0.9,
            height: height * 0.5,
          }}
          />
        <TouchableOpacity
          underlayColor='#fff'
          onPress = {() => navigation.navigate("EmergencyContacts", {newFriendsData: chosen})}
          style = {styles.sendToFriends}
        >
          <Icon
            name = "pluscircleo"
            type ='antdesign'
            size = {45}
          />
          <Text style = {styles.bodyFonts}>Add Friends</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 30
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bodyContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  sendToFriends: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    marginTop: 60,
    width: width * 0.9,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "white",
  },
  friendIcon: {
    flexDirection: "row",
    alignItems: "center"
  },
  bodyFonts: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "bold",
    textAlign: 'center'
  },
});

export default Contacts;
