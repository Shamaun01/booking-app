import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Choose an apartment",

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
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <TouchableOpacity
            style={{ margin: 10, backgroundColor: "white", padding: 10 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={index}
            >
              <Text
                style={{ fontSize: 17, fontWeight: "500", color: "#007FFF" }}
              >
                {item.name}
              </Text>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="#007FFF"
              />
            </View>
            <Text style={{ marginTop: 4, fontWeight: "500" }}>
              Pay at the property
            </Text>
            <Text style={{ marginTop: 4, color: "green", fontWeight: "500" }}>
              Free cancelation available
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
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
              <Text style={{ fontSize: 26, marginLeft: 8, fontWeight: "500" }}>
                Rs {route.params.newPrice * route.params.adults}
              </Text>
            </View>
            <Amenities />
            {selected.includes(item.name) ? (
              <TouchableOpacity
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                  }}
                >
                  SELECT
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selected.length > 0 ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("User", {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={{
            margin: 10,
            backgroundColor: "#007FFF",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Reserved
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
