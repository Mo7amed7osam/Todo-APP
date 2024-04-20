import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import {useState,useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserItem from "./components/user_item";
import { router } from "expo-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLouding, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataUser = await AsyncStorage.getItem("user");
        
        if (dataUser == null) {
          const respons = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          if (!respons.ok) {
            console.error("HTTP error! status: %d\n%s", respons.status);
          }

          const userData = await respons.json();
          await AsyncStorage.setItem("user", JSON.stringify(userData));
          setUsers(userData);
          setIsLoading(false);
          console.log(userData);
        } else {
          setUsers(JSON.parse(dataUser));
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  if (isLouding) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }
  const handleUserPress = (user) => {
    router.push(`/todos/${user.id}`,
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>  handleUserPress(item)}>
            <UserItem title={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
