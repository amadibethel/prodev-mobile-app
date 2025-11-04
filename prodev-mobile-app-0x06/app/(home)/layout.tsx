import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
        }}
      />
      <Stack.Screen
        name="property/[id]"
        options={{
          title: "Property Details",
          headerBackTitle: "Back",
          headerTintColor: "#000",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
