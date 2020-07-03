import React, { useEffect, useState } from "react";
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

const initialResults = [
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
