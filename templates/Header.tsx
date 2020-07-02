import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconNav from "react-native-vector-icons/EvilIcons";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ddd",
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
    marginRight: "auto",
  },
});

interface HeaderProps {
  hasBackBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasBackBtn }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerNav}>
        <TouchableHighlight>
          <IconNav name="navicon" size={40} color="#222" />
        </TouchableHighlight>
        <TouchableHighlight style={styles.homeButton}>
          <Icon name="book-open-variant" size={40} color="#222" />
        </TouchableHighlight>
      </View>
      <View style={styles.headerTitle}>
        {hasBackBtn && (
          <TouchableHighlight style={styles.headerButton}>
            <Icon name="keyboard-backspace" size={40} color="#222" />
          </TouchableHighlight>
        )}
        <Text style={styles.headerTitleText}>XKCD</Text>
      </View>
    </View>
  );
};

export default Header;
