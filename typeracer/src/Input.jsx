import { Text, View, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, selectInputValue } from "../store/reducerInput";

export const Input = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputValue}
        onChangeText={(value) => dispatch(changeValue(value))}
        style={styles.input}
        autoCapitalize={"none"}
        autoComplete={"off"}
        autoCorrect={false}
        autoFocus={true}
        textAlign={"center"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    width: "60%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  input: {
    fontSize: 18,
    color: "white",
    padding: "1%",
    outlineStyle: "none",
  },
});
