import { Text, View, StyleSheet } from "react-native";
import WelcomeView from "./src/components/WelcomeView";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeView />

      <View style={styles.box}>
        <Text style={{ fontSize: 20 }}>Hello</Text>
        <Text style={{ fontSize: 22 }}>Let's program in</Text>
        <Text style={{ fontSize: 25 }}>React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",

    backgroundColor: "#bbb",
  },

  box: {
    flexDirection: "column",

    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    padding: 40,
  },
});
