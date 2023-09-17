import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  const isItemSelected = (item) => {
    return selectedItem === item;
  };

  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => handleItemPress("bed")}
        style={[
          styles.bed,
          isItemSelected("bed") ? styles.selectedStyle : null,
        ]}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.bedtext}>stays</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleItemPress("flight")}
        style={[
          styles.bed,
          isItemSelected("flight") ? styles.selectedStyle : null,
        ]}
      >
        <Ionicons name="airplane-outline" size={24} color="white" />
        <Text style={styles.bedtext}>Flights</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleItemPress("car")}
        style={[
          styles.bed,
          isItemSelected("car") ? styles.selectedStyle : null,
        ]}
      >
        <AntDesign name="car" size={24} color="white" />
        <Text style={styles.bedtext}>Car Rental</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleItemPress("taxi")}
        style={[
          styles.bed,
          isItemSelected("taxi") ? styles.selectedStyle : null,
        ]}
      >
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text style={styles.bedtext}>Taxi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bed: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 15,
  },
  bedtext: {
    fontSize: 15,
    margin: 8,
    color: "white",
    fontWeight: "bold",
  },
  selectedStyle: {
    borderWidth: 1.5,
    padding: 6,
    borderColor: "white",
    borderRadius: 25,
  },
});

export default Header;
