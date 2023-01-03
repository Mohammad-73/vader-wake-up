import { Pressable, View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

function AlarmItem({ alarmTime, alarmTitle }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.pressContainer}>
        <View>
          <Text style={styles.time}>{alarmTime}</Text>
          <Text style={styles.text}>{alarmTitle}</Text>
        </View>
        <View>
          <Checkbox
            value={isSelected}
            onValueChange={setIsSelected}
            // style={styles.checkbox}
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
    marginHorizontal: 18,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#2D4263",
    padding: 12,
  },
  pressContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
