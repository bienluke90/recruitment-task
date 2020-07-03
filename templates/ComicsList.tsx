import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Comic from "../components/Comic";

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    flexGrow: 1,
  },
});

interface ComicListProps {
  setImg: React.Dispatch<React.SetStateAction<string>>;
  list: Comic[];
}

const ComicList: React.FC<ComicListProps> = ({ setImg, list }) => {
  const comicElements = list.map((c) => (
    <Comic
      key={`item-${c.id}`}
      title={c.title}
      img={c.img}
      date={c.date}
      setImg={setImg}
    />
  ));

  return <ScrollView style={styles.listContainer}>{comicElements}</ScrollView>;
};

export default ComicList;
