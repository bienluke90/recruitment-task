import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
});

interface FullWidthComicProps {
  img: string;
}

const FullWidthComic: React.FC<FullWidthComicProps> = ({ img }) => {
  const [height, setHeight] = useState<number>(0);

  useState(() => {
    (Image as any).getSize(img, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get("window").height;
      const maxWidth = Dimensions.get("window").width;
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setHeight(srcHeight * ratio);
    });
  });

  return (
    <ScrollView style={styles.itemContainer}>
      <ImageBackground
        style={{ flex: 1, height }}
        resizeMode="contain"
        source={{ uri: img }}
      />
    </ScrollView>
  );
};

export default FullWidthComic;
