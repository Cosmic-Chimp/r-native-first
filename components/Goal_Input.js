import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const Goal_Input = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal you want to add"
          style={styles.texinput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btns}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View style={styles.btns}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          {/* in r-native, btns cant have width customizibility
           unless you wrap it in a view elem */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  texinput: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: "5%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // add some styling to the buttons like margin etc
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  btns: {
    width: "40%",
  },
});

export default Goal_Input;
