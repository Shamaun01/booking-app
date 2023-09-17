import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Fill in your Details",

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const finalStep = () => {
    if (!firstName || !lastName || !email || !phone) {
      Alert.alert("Invalid Details", "Please Enter all the details frist", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (firstName && lastName && email && phone) {
      navigation.navigate("Confirm", {
        rooms: route.params.rooms,
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.paramsstartDate,
        endDate: route.params.endDate,
      });
    }
  };

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>First name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{
              padding: 7,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "500", marginTop: 10 }}>
            Last Name
          </Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{
              padding: 7,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "500", marginTop: 10 }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              padding: 7,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "500", marginTop: 10 }}>
            Phone No
          </Text>
          <TextInput
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={{
              padding: 7,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          alignItems: "center",
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 15,
                textDecorationLine: "line-through",
                fontWeight: "500",
              }}
            >
              Rs {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: "500" }}>
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text style={{ fontSize: 15, marginLeft: 10, color: "gray" }}>
            save total {route.params.oldPrice - route.params.newPrice} Rs
          </Text>
        </View>
        <TouchableOpacity
          onPress={finalStep}
          style={{
            backgroundColor: "#007FFF",
            padding: 10,
            borderRadius: 10,
            marginRight: 10,
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
            FINAL STEP
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
