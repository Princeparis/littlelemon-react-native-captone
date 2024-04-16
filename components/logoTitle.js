import React from "react";
import { StyleSheet, Image } from "react-native";

const LogoTitle = () => {
  return (
    <Image
      style={{
        width: 300,
        height: 50,
        resizeMode: "contain",
        alignSelf: "center",
      }}
      source={require("./images/Logo.png")}
    />
  );
};

const styles = StyleSheet.create({});

export default LogoTitle;
