import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../styles/global.css"; // ✅ Load Tailwind global styles

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(home)"
          options={{
            headerShown: false, // ✅ No header for the grouped home tabs
          }}
        />
      </Stack>
    </>
  );
}

