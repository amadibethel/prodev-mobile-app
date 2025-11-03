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

export default function Join() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = () => {
    // placeholder — replace with registration logic
    console.log("join:", { fullName, email, password });
    router.push("signin"); // after signup navigate to sign in or dashboard
  };

  return (
    <SafeAreaView style={joinStyles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={joinStyles.iconsection}>
          <Text />
          {/* If you have a back icon, put it here */}
          <Text />
        </View>

        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Create account</Text>
          <Text style={joinStyles.subText}>Start your journey with ProDev</Text>
        </View>

        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Full name</Text>
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="John Doe"
              style={joinStyles.formControl}
            />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={joinStyles.formControl}
            />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Password</Text>
            <View style={joinStyles.formPasswordControl}>
              <TextInput
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholder="********"
                style={joinStyles.passwordControl}
              />
            </View>
          </View>

          <TouchableOpacity style={joinStyles.primaryButton} onPress={handleJoin}>
            <Text style={joinStyles.buttonText}>Create account</Text>
          </TouchableOpacity>

          <View style={joinStyles.secondaryButtonGroup}>
            <TouchableOpacity style={[joinStyles.secondaryButton, { borderColor: '#E9E9E9' }]}>
              <Image source={GOOGLELOGO} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[joinStyles.secondaryButton, { borderColor: '#E9E9E9' }]}>
              <Image source={FACEBOOKLOGO} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("signin")}>
            <Text style={joinStyles.signupSubTitleText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

