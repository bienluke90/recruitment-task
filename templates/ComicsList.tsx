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
    num: 2327,
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
    num: 2327,
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
    num: 2327,
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
    num: 2327,
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
    num: 2327,
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
    num: 2327,
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
    num: 2327,
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
    num: 2327,
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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ComicList: React.FC = () => {
  const [comicList, setComicList] = useState<Comic[]>([]);

  useEffect(() => {
    setComicList(
      comics.map((c) => ({
        title: c.title,
        img: c.img,
      }))
    );
  });

  const comicElements = comicList.map((c) => (
    <Comic title={c.title} img={c.img} />
  ));

  return <ScrollView style={styles.listContainer}>{comicElements}</ScrollView>;
};

export default ComicList;
