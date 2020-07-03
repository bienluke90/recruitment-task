import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../templates/Header";
import ComicList from "./../templates/ComicsList";
import FullWidthComic from "../components/FullWidthComic";
import { Router, Scene, Actions } from "react-native-router-flux";

const Root: React.FC = () => {
  const [img, setImg] = useState<string>("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.rootContainer}
    >
      <Header hasBackBtn={!!img} setImg={setImg} />
      <Router>
        <Scene key="root" headerMode="none">
          <Scene
            key="ComicList"
            initial={!img}
            component={() => <ComicList setImg={setImg} />}
          />
          <Scene
            key="FullWidthComic"
            initial={!!img}
            component={() => <FullWidthComic img={img} />}
          />
        </Scene>
      </Router>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: "0 auto",
    maxWidth: "1200px",
    width: "100%",
  },
});

export default Root;
