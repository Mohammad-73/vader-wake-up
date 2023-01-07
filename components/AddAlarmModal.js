import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

function AddAlarmModal({ visible, onAlarmAdd, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addAlarmHandler() {
    onAlarmAdd(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Alarm"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Alarm"
              onPress={addAlarmHandler}
              color="#C84B31"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddAlarmModal;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(45, 66, 99, 0.9)",
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
