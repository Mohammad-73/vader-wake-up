import { useState, useMemo } from "react";
import { Button, StyleSheet, View, Modal } from "react-native";
import TimePicker from "react-native-wheel-time-picker";

const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

function AddAlarmModal({ visible, onAlarmAdd, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, min] = useMemo(() => {
    return [
      Math.floor(timeValue / MILLISECONDS_PER_HOUR),
      Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
      Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
    ];
  }, [timeValue]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAlarmAdd(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.timePicker}>
          <TimePicker
            value={timeValue}
            wheelProps={{
              wheelHeight: 100,
              itemHeight: 30,
              selectedColor: "#ECDBBA",
              containerStyle: {
                padding: 4,
                margin: 4,
                width: 70,
              },
              textStyle: { fontSize: 24 },
            }}
            onChange={(newValue) => setTimeValue(newValue)}
          />
          {/* <Text style={styles.timeValue}>{`${hour < 10 ? "0" : ""}${hour}:${
            min < 10 ? "0" : ""
          }${min}`}</Text> */}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" onPress={onCancel} color="#4d4949" />
            </View>
            <View style={styles.button}>
              <Button
                title="Add Alarm"
                onPress={addGoalHandler}
                color="#C84B31"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddAlarmModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(25, 25, 25, 0.95)",
  },
  timePicker: {
    backgroundColor: "#191919",
    paddingHorizontal: 16,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 34,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
