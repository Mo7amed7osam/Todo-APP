import { router } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Login from "../screens/Login";

export default function Page() {

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
 
});
