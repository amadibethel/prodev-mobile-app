import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { styles as joinStyles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";
import { useRouter } from "expo-router";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // placeholder — replace with authentication logic
    console.log("signin:", { email, password });
    // router.push('/some-protected-route') // navigate to dashboard on success
  };

  return (
    <SafeAreaView style={joinStyles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={joinStyles.iconsection}>
          <Text />
          {/* optional: add logo or back button */}
          <Text />
        </View>

        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Welcome back</Text>
          <Text style={joinStyles.subText}>Sign in to continue to ProDev</Text>
        </View>

        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"

