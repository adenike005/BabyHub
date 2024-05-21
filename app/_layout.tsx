import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    LexendBlack : require('../assets/fonts/Lexend-Black.ttf'),
    LexendLight : require('../assets/fonts/Lexend-Thin.ttf'),
  });

  return (
    <Stack
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="Indextwo" />
      <Stack.Screen name="Indexthree" />
    </Stack>
  );
}


//web: 220953422555-5jme2fasbgp4fnov28hkiqm4cj4sugr3.apps.googleusercontent.com
//ios: 220953422555-9qgqi3a2fnea2dbkb0quopqko3n4aqha.apps.googleusercontent.com
//android: 