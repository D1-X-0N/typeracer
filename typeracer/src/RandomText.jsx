import { createRef, useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeValue, selectInputValue } from "../store/reducerInput";
import {
  RandTextWithMiddlewares,
  selectRandTextEn,
  selectRandTextLoading,
  selectRandTextRu,
} from "../store/reducerRandText";
import { usePrev } from "./hooks/usePrev";

export const RandomText = () => {
  const loading = useSelector(selectRandTextLoading);
  const randTextEn = useSelector(selectRandTextEn);
  const randTextRu = useSelector(selectRandTextRu);
  const inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  const [allText, setAllText] = useState([]);
  const [goodText, setgoodText] = useState("");
  const [bedText, setbedText] = useState("");
  const prevInputValue = usePrev(inputValue);
  const textRacer = createRef(null);

  useEffect(() => {
    setAllText(randTextEn.split(""));
  }, [randTextEn]);

  useEffect(() => {
    if (allText[0] != undefined) {
      if (
        allText[0] == inputValue[inputValue.length - 1] &&
        bedText.length == 0
      ) {
        setgoodText((prev) => prev + allText[0]);
        setAllText((prev) => prev.slice(1, prev.length));
        if (allText[0] == " ") dispatch(changeValue(""));
      } else {
        if (inputValue.length > prevInputValue.length) {
          setbedText((prev) => prev + allText[0]);
          setAllText((prev) => prev.slice(1, prev.length));
        } else {
          setAllText((prev) => {
            prev.unshift(bedText[bedText.length - 1]);
            return prev;
          });
          setbedText((prev) => prev.slice(0, prev.length - 1));
        }
      }
    }
  }, [inputValue]);

  return (
    <View style={styles.textContainer}>
      <Button
        style={styles.btn}
        title="start"
        onPress={() => dispatch(RandTextWithMiddlewares())}
      />
      {loading ? (
        <Text style={styles.text}>{<ActivityIndicator />}</Text>
      ) : (
        <Text ref={textRacer} style={styles.text}>
          <Text style={styles.colorGreen} id="good">
            {goodText}
          </Text>
          <Text style={styles.colorRed} id="bed">
            {bedText}
          </Text>
          <Text>{allText.join("")}</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
  },
  btn: {
    width: 50,
  },
  textContainer: {
    flex: 1,
    color: "textContainer",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },
  colorGreen: {
    color: "green",
  },
  colorRed: {
    color: "red",
  },
});
