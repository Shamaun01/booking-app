import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResult = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          // Check if item.place and input are defined before using toLowerCase()
          if (
            item.place &&
            input &&
            item.place.toLowerCase().includes(input.toLowerCase())
          ) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate("Home", {
                    input: item.place,
                  });
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View>
                  <Image
                    style={{ height: 70, width: 70 }}
                    source={{ uri: item.placeImage }}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 15 }}>
                    {item.properties.length} Properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
