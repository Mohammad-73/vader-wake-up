import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import AlarmItem from "./AlarmItem";
import AddAlarmButton from "./AddAlarmButton";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [alarmList, setAlarmList] = useState([]);

  useEffect(() => {
    setAlarmList([
      { time: "00:00", text: "Alarm one", id: 1 },
      { time: "00:00", text: "Alarm two", id: 2 },
      { time: "00:00", text: "Alarm three", id: 3 },
      { time: "00:00", text: "Alarm four", id: 4 },
      { time: "00:00", text: "Alarm five", id: 5 },
      { time: "00:00", text: "Alarm six", id: 6 },
      { time: "00:00", text: "Alarm seven", id: 7 },
    ]);
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.alarmContainer}>
        <FlatList
          ListFooterComponentStyle={() => {
            return (
              <LinearGradient
                // Background Linear Gradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={styles.linearBackground}
              />
            );
          }}
          data={alarmList}
          renderItem={(alarmItem) => {
            return (
              <AlarmItem
                alarmTime={alarmItem.item.time}
                alarmTitle={alarmItem.item.text}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
        <AddAlarmButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#121212",
  },
  alarmContainer: {
    paddingTop: 50,
    flex: 5,
  },
  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
