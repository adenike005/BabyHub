import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    LexendBlack : require('../assets/fonts/Lexend-Black.ttf'),
    LexendLight : require('../assets/fonts/Lexend-Light.ttf'),
  });

  return (
    <Stack
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
    </Stack>
  );
}
