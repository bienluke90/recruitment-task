import React from "react";
import { StyleSheet, View } from "react-native";
import Root from "./views/Root";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Root />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#555",
    alignSelf: "stretch",
    alignItems: "center",
    minHeight: "100%",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 10,
    flexGrow: 1,
  },
});

export default App;
