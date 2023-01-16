import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function AddAlarmButton({ onPress }) {
  const navigation = useNavigation();

  function addAlarmHandler() {
    onPress();
    // navigation.navigate("NewAlarm", { name: "Jane" });
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
    backgroundColor: "#ECDBBA",
    width: "100%",
  },
  addButtonText: {
    fontSize: 50,
    color: "#C84B31",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
