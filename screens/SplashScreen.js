import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#003580",
      }}
    >
      {/* <StatusBar hidden /> */}
      <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
        Booking.com
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
