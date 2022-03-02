import React, {useState} from 'react';
import { View, Alert, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button, CheckBox, Icon } from 'react-native-elements';
import  images  from '../Constants/images';

const width = Dimensions.get('window').width;

const EmergencyContacts  = ({ route, navigation }) => {
  const Item = ({ friend }) => (
    <View style={styles.item} key={friend.name}>
      <Image
        source = {friend.profilePic}
        style ={{
          width: 62,
          height: 62,
          marginBottom: 5,
        }}
      />
      <Text style={styles.title}>{friend.name}</Text>
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
    {name: "Angela", profilePic: images.AngelaPic, location: images.AngelaLoc, checked: false},
    {name: "Ben", profilePic: images.BenPic, location: images.BenLoc, checked: false},
    {name: "Christine", profilePic: images.ChristinePic, location: images.ChristineLoc, checked: false},
    {name: "Jess", profilePic: images.JessPic, location: images.JessLoc, checked: false},
    {name: "David", profilePic: images.DavidPic, location: images.DavidLoc, checked: false},
    {name: "Timmy", profilePic: images.TimmyPic, location: images.TimmyLoc, checked: false},
  ])

  React.useEffect(() => {
    let {newFriendsData} = route.params;
    console.log(newFriendsData)
  })

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
      } else {
        setFriends(friends + comma + data[index].name)
      }
    } else {
      const chosenData = [...chosen]
      const found = chosenData.findIndex(x => x.name === data[index].name)
      chosenData.splice(found, 1)
      setChosen(chosenData)
    }
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Confirm sending your location",
      friends,
      [{
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        {text: "OK", onPress: () => navigation.navigate("SentConfirmation")
      }]
    );

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
            <FlatList
            key={'$'}
            keyExtractor={(item, index) => String(index)}
            data={friendsData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{ paddingHorizontal: 13 }} />}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10 }}
          />
          <View style={styles.buttonsContainer}>
        
                <TouchableOpacity
            onPress = {() => navigation.navigate('Contacts')}
            style={styles.createRouteContainer}
          >
            <Icon
              name = "pluscircleo"
              type ='antdesign'
              size = {45}
            />
            <Text style={styles.buttonText}>Add From Contacts</Text>
          </TouchableOpacity>
                <Button
            title="Send Current Location"
            titleStyle={{ color: 'black', margin: 10, fontWeight: '600' }}
            buttonStyle={{ backgroundColor: '#FFD64D', borderRadius: 8,}}
            containerStyle={{ marginTop: 0, height: 60, width: width*0.9,}}
            onPress={createTwoButtonAlert}          
            />
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
buttonText: {
  marginLeft: 5
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
  sendToFriends: {
    flexDirection: 'column'
  },  
  createRouteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    width: width*0.9,

  },

  buttonTextStyle: {
    color: 'black', 
    margin: 10, 
    fontWeight: '600',
  },
  buttonsContainer: {
    width: width,
    marginBottom: 40,
    alignItems: 'center'
  }
 
});

export default EmergencyContacts;
