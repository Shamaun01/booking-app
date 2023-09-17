import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";

const ConformationScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",

      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const dispatch = useDispatch();
  const confirmBooking = () => {
    dispatch(savedPlaces(route.params));
    navigation.replace("Main");
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        margin: 20,
        borderRadius: 10,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {route.params.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <MaterialIcons name="stars" size={20} color="green" />
        <Text style={{ fontSize: 15, marginLeft: 5 }}>
          {route.params.rating}
        </Text>
        <View
          style={{
            backgroundColor: "#003580",
            marginLeft: 3,
            borderRadius: 5,
            paddingVertical: 5,
            width: 100,
            marginLeft: 8,
            marginTop: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Genius level
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,

          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Check-in</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.startDate}
          </Text>
        </View>
        <View style={{ marginRight: 80 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Check-out</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.endDate}
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 15,

            fontWeight: "bold",
          }}
        >
          Rooms and guests
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#007FFF",
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          {route.params.room} room , {route.params.adults} adults ,
          {route.params.children} children
        </Text>
      </View>
      <TouchableOpacity
        onPress={confirmBooking}
        style={{
          backgroundColor: "#003580",
          width: 120,
          paddingHorizontal: 12,
          marginBottom: 10,
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConformationScreen;

const styles = StyleSheet.create({});
