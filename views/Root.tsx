import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Header from "../templates/Header";
import ComicList from "./../templates/ComicsList";
import FullWidthComic from "../components/FullWidthComic";

const Root: React.FC = () => {
  const [img, setImg] = useState<string>();
  const [comicList, setComicList] = useState<Comic[]>([]);

  useEffect(() => {
    const links = [0, 1, 2, 3, 4, 5, 6, 7].map((l) => {
      if (l === 0) {
        return "https://xkcd.com/info.0.json";
      }
      return `https://xkcd.com/${l}/info.0.json`;
    });

    let obs = [];

    const fetchAll = async () => {
      await Promise.all(links.map((l) => fetch(l)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((datas) => {
          obs = [...datas];
        })
        .then(() =>
          setComicList(
            obs.map((o) => {
              return {
                title: o.title,
                img: o.img,
                id: o.num,
                date: `${o.day}-${o.month}-${o.year}`,
              };
            })
          )
        );
    };

    fetchAll();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Header hasBackBtn={!!img} setImg={setImg} />
      {!img && <ComicList list={comicList} setImg={setImg} />}
      {!!img && <FullWidthComic img={img} />}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: 1200,
    width: "100%",
    paddingTop: 10,
    flexGrow: 1,
  },
});

export default Root;
