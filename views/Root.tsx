import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../templates/Header";
import ComicList from "./../templates/ComicsList";
import FullWidthComic from "../components/FullWidthComic";
import { Router, Scene } from "react-native-router-flux";

const Root: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.rootContainer}
    >
      <Header />
      <Router>
        <Scene key="root" headerMode="none">
          <Scene key="ComicList" initial component={ComicList} />
          <Scene key="FullWidthComic" component={FullWidthComic} />
        </Scene>
      </Router>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: "0 auto",
    maxWidth: "1200px",
    width: "100%",
  },
});

export default Root;
