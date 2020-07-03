import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: "1em",
    minHeight: "200px",
    marginBottom: "1em",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 5,
  },

  itemInnerContainer: {
    flex: 1,
    flexDirection: "row",
    flexBasis: "100%",
  },
  itemTitle: {
    flex: 1,
    fontSize: 30,
    whiteSpace: "wrap",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  itemImgContainer: {
    width: "45%",
    height: "150px",
    marginLeft: "auto",
  },
  itemImage: {
    flex: 1,
  },
});

interface ComicProps {
  title: string;
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}

const Comic: React.FC<ComicProps> = ({ title, img, setImg }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableHighlight
        onPress={() => {
          setImg(img);
        }}
      >
        <View style={styles.itemInnerContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <View style={styles.itemImgContainer}>
            <Image style={styles.itemImage} source={{ uri: img }} />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Comic;
