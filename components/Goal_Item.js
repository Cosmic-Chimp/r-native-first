import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Goal_Item = ({ title, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //   padding: 50,
  // },
  // texinput: {
  //   width: "60%",
  //   borderBottomColor: "black",
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Goal_Item;
