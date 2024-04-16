import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Image
        style={{ width: 30, height: 30, marginRight: 10 }}
        source={require("./images/Profile.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default HeaderButton;
