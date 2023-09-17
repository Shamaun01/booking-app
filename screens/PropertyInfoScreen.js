import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Children, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalize";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const [showMore, setShowMore] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  const handlePress = () => {
    setShowMore(!showMore);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
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
                backgroundColor: "#17B169",
                padding: 4,
                borderRadius: 8,
                marginTop: 8,
                marginRight: 40,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>
                Travel Sustainable
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              margin: 10,
            }}
          >
            {route.params.photos
              .slice(0, showMore ? route.params.photos.length : 5)
              .map((photo) => (
                <View style={{ margin: 6 }}>
                  <Image
                    style={{
                      width: 110,
                      height: pixelNormalize(100),
                      borderRadius: pixelNormalize(4),
                    }}
                    source={{ uri: photo.image }}
                  />
                </View>
              ))}
            <TouchableOpacity
              onPress={handlePress}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  margin: 20,
                }}
              >
                {showMore ? "...See Less" : "See More..."}
              </Text>
            </TouchableOpacity>
          </Pressable>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "white", padding: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#17B169",
                width: 90,
                alignItems: "center",
                padding: 4,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                }}
              >
                20% off
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#17B169",
                width: 150,
                alignItems: "center",
                padding: 4,
                borderRadius: 8,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>Getway Deal</Text>
            </View>
          </View>

          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>
              Price For {route.params.room} nights , {route.params.adults}{" "}
              adults
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
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Check-in</Text>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.selectedDate.startDate}
            </Text>
          </View>
          <View style={{ marginRight: 80 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Check-out</Text>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.selectedDate.endDate}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <Text
            style={{
              fontSize: 15,
              color: "#007FFF",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            Rooms and guests
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#007FFF",
              marginLeft: 10,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            {route.params.room} room , {route.params.adults} adults ,
            {route.params.children} children
          </Text>
        </View>

        <Amenities />
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 70,
          }}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Room", {
            rooms: route.params.rooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.selectedDate.startDate,
            endDate: route.params.selectedDate.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Select Availabilty
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
