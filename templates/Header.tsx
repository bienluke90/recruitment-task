import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconNav from "react-native-vector-icons/EvilIcons";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    boxShadow: "0 0 25px 1px rgba(0, 0, 0, 0.2) inset",
    position: "relative",
  },
  headerTitleText: {
    textAlign: "center",
    fontSize: 60,
    width: "100%",
  },
  headerNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    height: "20px",
  },
  homeButton: {
    marginLeft: "auto",
  },
  headerButton: {
    position: "absolute",
    left: "1em",
    paddingLeft: "1em",
    marginRight: "auto",
  },
});

interface HeaderProps {
  hasBackBtn?: boolean;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ hasBackBtn = false, setImg }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerNav}>
        <TouchableHighlight
          onPress={() => {
            setImg("");
          }}
        >
          <IconNav name="navicon" size={40} color="#222" />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setImg("");
          }}
          style={styles.homeButton}
        >
          <Icon name="book-open-variant" size={40} color="#222" />
        </TouchableHighlight>
      </View>
      <View style={styles.headerTitle}>
        {hasBackBtn && (
          <TouchableHighlight
            onPress={() => {
              setImg("");
            }}
            style={styles.headerButton}
          >
            <Icon name="keyboard-backspace" size={40} color="#222" />
          </TouchableHighlight>
        )}
        <Text style={styles.headerTitleText}>XKCD</Text>
      </View>
    </View>
  );
};

export default Header;
