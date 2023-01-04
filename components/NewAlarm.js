import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function NewAlarm() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.alarmContainer}>
        <Text>new alarm</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
