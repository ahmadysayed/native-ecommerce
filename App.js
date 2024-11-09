import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 0.5,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "#bbb",
      }}
    >
      <Text style={{ fontSize: 20 }}>Hello </Text>
      <Text style={{ fontSize: 22 }}>Let's program in</Text>
      <Text style={{ fontSize: 25 }}>React Native </Text>
    </View>
  );
}
