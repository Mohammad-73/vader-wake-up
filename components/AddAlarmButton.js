import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

function AddAlarmButton({ alarmTime, alarmTitle }) {
  function addAlarmHandler() {
    // onGoalAdd(enteredGoalText);
    // setEnteredGoalText("");
  }

  return (
    <View style={styles.addButtonContainer}>
      <TouchableOpacity onPress={addAlarmHandler} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddAlarmButton;

const styles = StyleSheet.create({
  addButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  addButton: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    backgroundColor: "#C84B31",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 20,
    width: 80,
    height: 80,
  },
  addButtonText: {
    fontSize: 50,
    color: "#ECDBBA",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
