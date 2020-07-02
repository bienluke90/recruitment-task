import React from "react";
import { StyleSheet, View, Image } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
  },
  fullImage: {
    flex: 1,
    width: "100%",
  },
});

interface FullWidthComicProps {
  img: string;
}

const FullWidthComic: React.FC<FullWidthComicProps> = ({ img }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.fullImage} source={{ uri: img }} />
    </View>
  );
};

export default FullWidthComic;
