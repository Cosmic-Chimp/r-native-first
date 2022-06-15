import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import Goal_Item from "./components/Goal_Item";
import Goal_Input from "./components/Goal_Input";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalName) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalName },
    ]);
    setIsAddMode(false);
  };

  // above func use to be:
  // const addGoalHandler = () => {
  //   setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  // };

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  const cancelAddGoal = () => {
    setIsAddMode(false);
    // find way to set entered goal back to empty string
    // this way when cancelling, it doesnt save your previously typed in text
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => {
          setIsAddMode(true);
        }}
      />
      <Goal_Input
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <Goal_Item
            // id={itemData.item.key} // change line below's logic to be placed in goalitem with props.id
            onDelete={removeGoalHandler.bind(this, itemData.item.key)}
            title={itemData.item.value}
          />
        )}
      />
      {/*above avoids "infinite item rendering" */}
      {/* <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
