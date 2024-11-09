import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={{ fontSize: 20 }}>Hello</Text>
        <Text style={{ fontSize: 22 }}>Let's program in</Text>
        <Text style={{ fontSize: 25 }}>React Native</Text>
      </View>

      <View style={styles.bottomBox}>
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
    justifyContent: "center",
    backgroundColor: "#bbb",
  },

  topBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "colum",
    flex: 0.3,
    backgroundColor: "#ccc",
  },

  bottomBox: {
    flexDirection: "column",
    flex: 0.3,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});
