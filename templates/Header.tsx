import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconNav from "react-native-vector-icons/EvilIcons";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    position: "relative",
  },
  headerTitleText: {
    textAlign: "center",
    fontSize: 60,
    width: "100%",
  },
  headerNav: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    height: 40,
  },
  homeButton: {
    position: "absolute",
    right: 5,
    top: -5,
  },
  listButton: {
    position: "absolute",
    left: 5,
    top: 0,
  },
  headerButton: {
    position: "absolute",
    left: 5,
    top: 20,
    paddingLeft: 20,
    zIndex: 99999999999,
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
        <TouchableOpacity
          onPress={() => {
            setImg("");
          }}
          style={styles.listButton}
        >
          <IconNav name="navicon" size={40} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setImg("");
          }}
          style={styles.homeButton}
        >
          <Icon name="book-open-variant" size={40} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerTitle}>
        {hasBackBtn && (
          <TouchableOpacity
            onPress={() => {
              setImg("");
            }}
            style={styles.headerButton}
          >
            <Icon name="keyboard-backspace" size={40} color="#222" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitleText}>XKCD</Text>
      </View>
    </View>
  );
};

export default Header;
