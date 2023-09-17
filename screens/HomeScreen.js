import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedDate, setSelecteddate] = useState();
  const [room, setRoom] = useState(1);
  const [adults, setAdults] = useState(2);
  const [selectChildrens, setSelectChildrens] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const searchPlaces = (place) => {
    if (!route.params || !selectedDate) {
      Alert.alert("Invalid Details", "Please Enter all details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (route.params && selectedDate) {
      navigation.navigate("Place", {
        room: room,
        adults: adults,
        selectChildrens: selectChildrens,
        selectedDate: selectedDate,
        place: place,
      });
    }
  };

  console.log(selectedDate);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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
      headerTitleAlign: "center",
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: {
            width: "90%",
            marginHorizontal: "3%",
          },
          text: { fontSize: 30 },
        }}
        primary
        title="Select Dates"
      />
    );
  };

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View style={styles.mainView}>
            <Pressable
              onPress={() => {
                navigation.navigate("Search");
              }}
              style={styles.pressable}
            >
              <AntDesign name="search1" size={18} color="black" />
              <Text style={styles.inputText}>
                {route.params ? route.params.input : "Enter your destination"}
              </Text>
            </Pressable>

            <Pressable style={styles.pressable}>
              <Feather name="calendar" size={18} color="black" />

              <DatePicker
                style={{
                  width: 250,
                  height: 30,
                  borderWidth: 0,
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    marginRight: "auto",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 13,
                    marginRight: "auto",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                  },
                }}
                centerAlign
                onConfirm={(startDate, endDate) =>
                  setSelecteddate(startDate, endDate)
                }
                customButton={(onConfirm) => customButton(onConfirm)}
                allowFontScaling={false}
                placeholder={"Enter your date"}
                mode={"range"}
              />
            </Pressable>

            <TouchableOpacity
              style={styles.pressable}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="user" size={18} color="black" />
              <Text style={{ color: "red" }}>
                {`${room} room . ${adults} adults . ${selectChildrens} children`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => searchPlaces(route?.params.input)}
              style={{
                borderColor: "#FFC72C",
                borderWidth: 2,
                padding: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <TouchableOpacity
              style={{
                paddingRight: 10,
                marginRight: "auto",
                marginLeft: "auto",
                backgroundColor: "#003580",
                width: "100%",
                height: "auto",
                padding: 10,
                alignItems: "center",
                marginBottom: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ color: "white", fontSize: 17 }}>Apply</Text>
            </TouchableOpacity>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text>Rooms</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 40,
                borderWidth: 1,
                borderColor: "#BEBEBEBE",
                borderRadius: 8,
                paddingVertical: 10,
              }}
            >
              <Pressable
                onPress={() => setRoom(Math.max(1, room - 1))}
                style={{ justifyContent: "space-between", marginLeft: 15 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#003580",
                    fontWeight: "500",
                    padding: 5,
                  }}
                >
                  −
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#003580",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {room}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setRoom((room) => room + 1)}
                style={{ justifyContent: "space-between", marginRight: 15 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#003580",
                    fontWeight: "500",
                    padding: 5,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text>Adults</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 40,
                borderWidth: 1,
                borderColor: "#BEBEBEBE",
                borderRadius: 8,
                paddingVertical: 10,
              }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{ justifyContent: "space-between", marginLeft: 15 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#003580",
                    fontWeight: "500",
                    padding: 5,
                  }}
                >
                  −
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#003580",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {adults}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setAdults((adults) => adults + 1)}
                style={{ justifyContent: "space-between", marginRight: 15 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#003580",
                    fontWeight: "500",
                    padding: 5,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text>Children</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 40,
                borderWidth: 1,
                borderColor: "#BEBEBEBE",
                borderRadius: 8,
                paddingVertical: 10,
              }}
            >
              <Pressable
                onPress={() =>
                  setSelectChildrens(Math.max(0, selectChildrens - 1))
                }
                style={{ justifyContent: "space-between", marginLeft: 15 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#003580",
                    fontWeight: "500",
                    padding: 5,
                  }}
                >
                  −
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#003580",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {selectChildrens}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectChildrens((c) => c + 1)}
                style={{ justifyContent: "space-between", marginRight: 15 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#003580",
                    fontWeight: "500",
                    padding: 5,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Travel more,spend less
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              height: 150,
              width: 250,
              borderRadius: 10,
              backgroundColor: "#003580",
              marginHorizontal: 10,
              marginTop: 10,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                marginVertical: 7,
              }}
            >
              Genius
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              You're at Genius Level 1 in our loyality programme
            </Text>
          </Pressable>
          <Pressable
            style={{
              height: 150,
              width: 250,
              borderRadius: 10,
              marginHorizontal: 10,
              marginTop: 10,
              padding: 20,
              borderWidth: 0.5,
              borderColor: "#003580",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "black",
                marginVertical: 7,
              }}
            >
              15% discount on stays
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "black" }}>
              Enjoy discounts at participting properties worldwide
            </Text>
          </Pressable>
          <Pressable
            style={{
              height: 150,
              width: 250,
              borderRadius: 10,
              marginHorizontal: 10,
              marginTop: 10,
              padding: 20,
              borderWidth: 0.5,
              borderColor: "#003580",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "black",
                marginVertical: 7,
              }}
            >
              20% discount on stays
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "black" }}>
              Compleate 5 stayes to unlock genius level 2
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    margin: 18,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 8,
  },
  inputText: {
    marginRight: "auto",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
  },
  select: {
    height: 26,
    width: 26,
    // borderWidth: 0.5,
    // borderColor: "#BEBEBEBE",
    // borderRadius: 10,
  },
});
