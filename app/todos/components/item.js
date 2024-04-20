import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TodoItem({ todo }) {
  const [done, setDone] = React.useState(false);
  return (
    <Pressable onPress={() => setDone(!done)}>
      <View style={styles.container}>
        <Icon name="check" color={done ? "black" : "pink"} />
        <Text style={styles.text}>{todo}</Text>
      </View>
    </Pressable>
  );
}
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
    padding: 16,
    justifyContent: "space-between",
    width: screenWidth * 0.878,
    margin: 8,
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 18,
    fontWeight: "800",
    marginLeft: 8,
  },
});
