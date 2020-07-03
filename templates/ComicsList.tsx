import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Comic from "../components/Comic";

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    padding: "1em",
    flexGrow: 1,
  },
});

const comics = [
  {
    month: "7",
    num: 1,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 2,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 3,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 4,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 5,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 6,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 7,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
  {
    month: "7",
    num: 8,
    link: "",
    year: "2020",
    news: "",
    safe_title: "Oily House Index",
    transcript: "",
    alt: "We're underwater on our mortgage thanks to the low price of water.",
    img: "https://imgs.xkcd.com/comics/oily_house_index.png",
    title: "Oily House Index",
    day: "1",
  },
];

interface ComicListProps {
  setImg: React.Dispatch<React.SetStateAction<string>>;
}

const ComicList: React.FC<ComicListProps> = ({ setImg }) => {
  const [comicList, setComicList] = useState<Comic[]>([]);

  useEffect(() => {
    setComicList(
      comics.map((c) => ({
        title: c.title,
        img: c.img,
        id: c.num,
      }))
    );
  }, []);

  const comicElements = comicList.map((c) => (
    <Comic key={c.id} title={c.title} img={c.img} setImg={setImg} />
  ));

  return <ScrollView style={styles.listContainer}>{comicElements}</ScrollView>;
};

export default ComicList;
