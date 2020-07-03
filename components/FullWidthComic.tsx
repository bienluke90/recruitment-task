import React from "react";
import { StyleSheet, View, Image, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexBasis: "100%",
    margin: "1em",
  },
  fullImage: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
});

interface FullWidthComicProps {
  img: string;
}

const FullWidthComic: React.FC<FullWidthComicProps> = ({ img }) => {
  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        } as ViewStyle,
      ]}
    ></View>
  );
};

export default FullWidthComic;
