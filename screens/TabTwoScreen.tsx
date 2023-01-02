import { StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
