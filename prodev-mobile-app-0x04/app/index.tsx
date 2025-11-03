import React from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles as mainStyles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={mainStyles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={mainStyles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} style={{ width: 180, height: 60, resizeMode: 'contain' }} />
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Learn. Ship. Grow.</Text>

          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>
              Join developers building production-ready apps and ship faster.
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 60 }}>
          <View style={mainStyles.buttonGroup}>
            <TouchableOpacity
              accessibilityLabel="Get started"
              onPress={() => router.push("join")}
              style={[mainStyles.buttonPrimary, { marginRight: 8 }]}
            >
              <Text style={mainStyles.buttonPrimaryText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityLabel="Sign in"
              onPress={() => router.push("signin")}
              style={[mainStyles.buttonSecondary, { marginLeft: 8 }]}
            >
              <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={mainStyles.buttonGroupSubText}>
            <Text style={{ color: "#fff" }}>By continuing you agree to our </Text>
            <TouchableOpacity onPress={() => { /* link to terms if any */ }}>
              <Text style={{ color: "#fff", fontWeight: "700" }}>Terms</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

