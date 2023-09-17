import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCarts = ({
  adults,
  room,
  children,
  selectedDate,
  property,
  availableRoom,
}) => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const [iconColor, setIconColor] = useState("black");
  const handleIconPress = () => {
    const newColor = iconColor === "black" ? "red" : "black";
    setIconColor(newColor);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            rooms: property.rooms,
            adults: adults,
            children: children,
            selectedDate: selectedDate,
            room: room,
          })
        }
        style={{
          flexDirection: "row",
          margin: 8,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <View>
          <View>
            <Image
              style={{
                height: height / 3,
                width: width - 280,
                borderRadius: 5,
              }}
              source={{ uri: property.image }}
            />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 210 }}>{property.name}</Text>
            <TouchableOpacity onPress={handleIconPress}>
              <Entypo name="heart" size={24} color={iconColor} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <MaterialIcons name="stars" size={20} color="#6CB4EE" />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              {property.rating}
            </Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                marginLeft: 3,
                borderRadius: 5,
                paddingVertical: 5,
                width: 100,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Genius level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 200,
              marginTop: 5,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text style={{ fontSize: 15, marginTop: 4, fontWeight: "500" }}>
            Price for one night and {adults} adults
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
                fontWeight: "500",
              }}
            >
              Rs {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 18, marginLeft: 5, fontWeight: "500" }}>
              Rs {property.newPrice * adults}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel room : 1 bed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#6CB4EE",
              marginLeft: 3,
              borderRadius: 5,
              paddingVertical: 5,
              width: 160,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Limited Time Deal !
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyCarts;

const styles = StyleSheet.create({});
