import {
    NavigationContainer,
    useFocusEffect,
    useIsFocused,
  } from "@react-navigation/native";
  import React, { useState, useContext } from "react";
  import {
    Dimensions,
    View,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    Touchable,
    TextInput
  } from "react-native";
  import { Text, Card, Button, Icon } from "react-native-elements";
  import FriendsLocation from "./friendsLocation";
  import myLocation from "./myLocation";
  import images from "../Constants/images";
  import AppContext from "./appContext";
  import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
  import MapViewDirections from "react-native-maps-directions";
  import Svg, { Circle } from "react-native-svg";
  import { Marker } from "react-native-maps";
  
  const GOOGLE_MAPS_APIKEY = "AIzaSyBV_EvsR_SI9az9aAUM_ch9UU3MswZAqJM";
  
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  //https://reactnativeelements.com/docs/1.2.0/card
  const ModeSelection = ({ route, navigation }) => {
    const [scroll, setScroll] = useState(false);
    const myContext = useContext(AppContext);
    const [onRoute, setOnRoute] = useState(myContext.onRoute);
    const isFocused = useIsFocused();
    const [color, setColor] = useState("#FFD64D")
    const [endPoint, setEndPoint] = useState(route.params.destination);


    React.useEffect(() => {
      setOnRoute(myContext.onRoute);
      console.log("dest is", myContext.destination);
      console.log("origin is", myContext.origin);
      console.log("myContext.onroute is", myContext.onRoute);
      console.log("mycontext at home is", onRoute);
      console.log("hello");
    });
  
    const [buttons] = useState([
      {
        name: "Bus",
        icon: "directions-bus",
        type: "materialicons",
      },
      {
        name: "Train",
        icon: "train",
        type: "fontawesome5",
      },
      {
        name: "Walk",
        icon: "directions-walk",
        type: "materialicons",
      },
      {
        name: "Subway",
        icon: "subway",
        type: "materialcommunityIcons",
      },
    ]);

    const renderItem = (item, index, separators) => {
      return (
        <View>
          <Card
            key={index}
            containerStyle={{
              marginTop: 15,
              width: 170,
              height: 170,
              backgroundColor: color,
              borderRadius: 10,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              underlayColor="#fff"
              onPress={() =>
                navigation.navigate("RouteView", {
                    destination: endPoint,
                  })
              }
            >
              <Icon name={item.item.icon} type={item.item.type} size={75} />
              <Text style={styles.bodyFonts}>{item.item.name}</Text>
            </TouchableOpacity>
          </Card>
        </View>
      );
    };
  
    const onChangeText = (numMarker) => {

    }

  
    return (
      <>
        <View style={styles.container}>
          <View style={styles.homeHeaderContainer}>
            <TouchableOpacity>
              <Image
                source={images.Logo}
                style={{
                  width: 55,
                  height: 55,
                }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor="#fff"
              onPress={() => navigation.navigate("NotSafe")}
            >
              <Icon name="setting" type="antdesign" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>
          <Text style={styles.titleText}>How many checkpoints do you want?</Text>
          <TextInput
              style={styles.textInput}
              onChangeText={myContext.regNumMarkers}
              value={myContext.numMarkers}
              placeholder="🔍 Search"
            />
        </View>
          
          <Text style={styles.titleText}>Select Mode of Transportation</Text>
          <FlatList
            key={"#"}
            keyExtractor={(item) => "#" + item.name}
            data={buttons}
            renderItem={renderItem}
            numColumns={2}
            scrollEnabled={scroll}
            style={styles.cardContainer}
          />
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: height * 0.05,
      marginHorizontal: 15,
    },
    cardContainer: {
      marginLeft: -2,
    },
    homeHeaderContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 0.4 * width,
      justifyContent: "space-between",
    },
    createRouteContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderRadius: 10,
      height: 145,
      marginTop: 10,
      marginBottom: 30,
      shadowOffset: { width: 2, height: 2 },
      shadowColor: "black",
      shadowOpacity: 0.1,
    },
    createRouteFont: {
      marginLeft: 6,
      fontSize: 16,
      fontWeight: "500",
    },
    iconContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bodyFonts: {
      fontSize: 15,
      fontWeight: "500",
      textAlign: "center",
      marginTop: 10,
    },
    titleFonts: {
      fontSize: 17,
      fontWeight: "700",
    },
    buttonContainer: {
      flexDirection: "column",
      justifyContent: "center",
    },
    map: {
      marginBottom: 10,
      width: width * 0.9,
      height: height * 0.23,
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
      titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
      },
  });
  
  export default ModeSelection;
  