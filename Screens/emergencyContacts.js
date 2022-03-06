import React, { useState } from "react";
import {
  View,
  Alert,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Text, Button, CheckBox, Icon } from "react-native-elements";
import images from "../Constants/images";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const data = [
  {
    name: "Angela",
    profilePic: images.AngelaPic,
    location: images.AngelaLoc,
    checked: false,
  },
  {
    name: "Ben",
    profilePic: images.BenPic,
    location: images.BenLoc,
    checked: false,
  },
  {
    name: "Christine",
    profilePic: images.ChristinePic,
    location: images.ChristineLoc,
    checked: false,
  },
  {
    name: "Jess",
    profilePic: images.JessPic,
    location: images.JessLoc,
    checked: false,
  },
  {
    name: "David",
    profilePic: images.DavidPic,
    location: images.DavidLoc,
    checked: false,
  },
  {
    name: "Timmy",
    profilePic: images.TimmyPic,
    location: images.TimmyLoc,
    checked: false,
  },
];
const EmergencyContacts = ({ route, navigation }) => {
  const Item = ({ friend }) => (
    <View style={styles.item} key={friend.name}>
      <View style={styles.friendIcon}>
        <Image
          source={friend.profilePic}
          style={{
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
        onPress={() => addName((friend = { friend }))}
        checkedColor="black"
        uncheckedColor="black"
      />
    </View>
  );

  const renderItem = ({ item }) => {console.log("item", item); return <Item friend={item} />};
  const [friendsData, setFriendsData] = useState(data)
  const [pageTitle, setPageTitle] = useState("")

  React.useEffect(() => {
    if (route.params.newFriendsData && route.params.newFriendsData.length > 0) {
      for (var i = 0; i < route.params.newFriendsData.length; i++) {
        route.params.newFriendsData[i].checked = false
      }
      setFriendsData([...data,...route.params.newFriendsData]);
    }
    
    setPageTitle(route.params.title) 
  },[route.params.newFriendsData]);

  const [chosen, setChosen] = useState([]);
  const [friends, setFriends] = useState("");

  const addName = ({ friend }) => {
    const data = [...friendsData];
    const index = data.findIndex((x) => x.name === friend.name);
    data[index].checked = !data[index].checked;
    setFriendsData(data);
    if (data[index].checked) {
      setChosen([...chosen, data[index]]);
      let temp = friends;
      const comma = ", ";
      if (temp === "") {
        setFriends(data[index].name);
      } else {
        setFriends(friends + comma + data[index].name);
      }
    } else {
      const chosenData = [...chosen];
      const found = chosenData.findIndex((x) => x.name === data[index].name);
      chosenData.splice(found, 1);
      setChosen(chosenData);
    }
  };

  const createTwoButtonAlert = () => {
    friends.length > 0
      ? Alert.alert("You are sending your location to ", friends, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => navigation.navigate("SentConfirmation"),
          },
        ])
      : Alert.alert(
          "Please select friends to send your location to!",
          friends,
          [
            {
              text: "Got it",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ]
        );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            underlayColor="#fff"
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" type="ionicon" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={images.Logo}
              style={{
                width: 50,
                height: 50,
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity underlayColor="#fff">
            <Icon name="setting" type="antdesign" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.titleText}>{pageTitle}</Text>
          <TextInput
            placeholder="🔍 Search friends"
            style={styles.textInput}
          />
          <FlatList
            key={"$"}
            keyExtractor={(item, index) => String(index)}
            data={friendsData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View style={{}} />
            )}
            style={{
              marginTop: 15,
              width: width * 0.9,
              height: height * 0.5,
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Contacts")}
            style={styles.createRouteContainer}
          >
            <Icon name="pluscircleo" type="antdesign" size={45} />
            <Text style={styles.bodyFonts}>Add From Contacts</Text>
          </TouchableOpacity>
        </View>
        {pageTitle == "Request Location From"?
          <Button
            title="Request"
            titleStyle={styles.buttonTextStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
            onPress={createTwoButtonAlert}
          /> :
          <Button
            title="Send"
            titleStyle={styles.buttonTextStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
            onPress={createTwoButtonAlert}
          />
        }
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
  bodyContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bodyFonts: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "bold",
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  createRouteContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    marginTop: 45,
    width: width * 0.9,
  },
  friendIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: '#FFD64D',
    borderRadius: 8,
    height: 60,
    width: width*0.9,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  buttonTextStyle: {
    color: 'black',
    margin: 10,
    fontWeight: '600',
    fontSize: 20
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  }
});

export default EmergencyContacts;
