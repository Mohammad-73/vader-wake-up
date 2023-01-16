import { Pressable, View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

function AlarmItem({ alarmTime, alarmTitle }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteItem}>x</Text>
      </View>
      <Pressable style={styles.pressContainer}>
        <View>
          <Text style={styles.time}>{alarmTime}</Text>
          <Text style={styles.text}>{alarmTitle}</Text>
        </View>
        <View>
          <Switch
            trackColor={{ true: "#C84B31", false: "#fff" }}
            thumbColor={isEnabled ? "#ECDBBA" : "#ECDBBA"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default AlarmItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#2D4263",
    borderBottomWidth: 2,
    borderBottomColor: "#191919",
  },
  deleteContainer: {
    backgroundColor: "#fb3640",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  deleteItem: {
    fontSize: 26,
    color: "#ECDBBA",
  },
  pressContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
  },
  time: {
    color: "#ECDBBA",
    fontSize: 26,
  },
  text: {
    color: "#ECDBBA",
    fontSize: 18,
    opacity: 0.5,
  },
});
