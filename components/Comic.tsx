import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: "1em",
    minHeight: "200px",
    marginBottom: "1em",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  itemTitleContainer: {
    flexShrink: 1,
  },
  itemTitle: {
    flex: 1,
    fontSize: 40,
    whiteSpace: "wrap",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  itemImgContainer: {
    width: "45%",
    height: "120px",
    marginLeft: "auto",
  },
  itemImage: {
    flex: 1,
  },
});

interface ComicProps {
  title: string;
  img: string;
}

const Comic: React.FC<ComicProps> = ({ title, img }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableHighlight style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
      </TouchableHighlight>
      <View style={styles.itemImgContainer}>
        <Image style={styles.itemImage} source={{ uri: img }} />
      </View>
    </View>
  );
};

export default Comic;
