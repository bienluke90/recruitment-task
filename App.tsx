import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Root from "./Views/Root";

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Root />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#555",
    alignSelf: "stretch",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    padding: "1em",
    overflowY: "scroll",
    flexGrow: 1,
  },
});

export default App;
