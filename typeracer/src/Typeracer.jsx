import { StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { useState, useEffect } from "react";
import { RandomText } from "./RandomText";
import { useSelector } from "react-redux";
import { selectRandTextEn, selectRandTextRu } from "../store/reducerRandText";

export default function Typeracer() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>TypeRacer</Text>
      <View style={styles.main}>
        <View style={styles.container}>
          <RandomText style={styles.randText} />
          <Input />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    padding: "3%",
  },
  main: {
    flex: 1,
    alignItems: "center",
    width: "80%",
    paddingTop: "30%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderColor: "#3B3B3B",
    borderRadius: 10,
    padding: "3%",
  },
  header: {
    color: "white",
    fontSize: 32,
    alignItems: "top",
    marginBottom: "20%",
    marginTop: "5%",
  },
  randText: {
    justifyContent: "center",
  },
});
