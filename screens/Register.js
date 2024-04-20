import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { register } from "../firebase/auth";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handlePress = async () => {
    try {
        const credentials = await register(email, password,userName);
        console.log('credentials', credentials);
        router.replace('account/login/login')
    } catch (error) {
        console.log('error', error);
        setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={userName}
        onChangeText={setUserName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Register" onPress={handlePress} />
      <Pressable onPress={()=>router.replace("/account/login/login")}>
        <Text style={{ marginTop: 10 }}>Login</Text>
      </Pressable>
      <Pressable>
        <Text style={{ marginTop: 10 }}>Forgot Password</Text>
      </Pressable>
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 15,
  },
});

export default Register;
