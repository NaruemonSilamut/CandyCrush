import { Stack } from "expo-router";
import "./global.css";


export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(tabs)/home" />
        <Stack.Screen name="(tabs)/cart1" />
        <Stack.Screen name="(tabs)/account" />
      </Stack>
  );
}
