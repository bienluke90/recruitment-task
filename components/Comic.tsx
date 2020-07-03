import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: 20,
    minHeight: 200,
    marginBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },

  itemInnerContainer: {
    flex: 1,
    flexDirection: "row",
    flexBasis: "100%",
  },
  itemTitle: {
    flex: 1,
    fontSize: 30,
    flexShrink: 1,
    flexWrap: "wrap",
    width: "65%",
  },
  itemImgContainer: {
    width: "45%",
    height: 150,
  },
  itemImage: {
    flex: 1,
  },
  itemDate: {
    fontSize: 15,
  },
});

interface ComicProps {
  title: string;
  img: string;
  date: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}

const Comic: React.FC<ComicProps> = ({ title, img, setImg, date }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          setImg(img);
        }}
      >
        <View style={styles.itemInnerContainer}>
          <Text style={styles.itemTitle}>
            {title} {"\n"} <Text style={styles.itemDate}>Date: {date}</Text>
          </Text>
          <View style={styles.itemImgContainer}>
            <Image style={styles.itemImage} source={{ uri: img }} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Comic;
