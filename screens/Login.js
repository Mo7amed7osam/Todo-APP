import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { login, resetPass } from "../firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const credentials = await login(email, password);
      console.log(credentials);
      router.navigate(`/todos/${credentials.user.uid}`);
    } catch (error) {
      console.log('error', error);
      setError(error.message); 
    }
  };

  const handleForgotPass = async () => {
    try {
      await resetPass(email);
      alert("Please check your email to reset your password");
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} color="green" />
      <Pressable onPress={()=>router.replace("/account/register/register")}>
        <Text style={[styles.link, styles.greenText]}>Register</Text>
      </Pressable>
      <Pressable onPress={handleForgotPass}>
        <Text style={[styles.link, styles.greenText]}>Forgot Password</Text>
      </Pressable>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    width: "100%",
  },
  link: {
    marginTop: 10,
    color: "blue",
  },
  greenText: {
    color: "green",
  },
  error: {
    marginTop: 10,
    color: "red",
  },
});

export default Login;
