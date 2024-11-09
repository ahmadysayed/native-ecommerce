import { View, Text, StyleSheet } from "react-native";

function WelcomeView() {
  return (
    <View>
      <Text style={styles.welcomeTxt("#000", 70)}>Find The Most</Text>

      <Text style={styles.welcomeTxt("#2A4D50", 0)}>Luxurious Furniture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: (color, top) => ({
    fontSize: 38,
    color: color,
    marginTop: top,
  }),
});

export default WelcomeView;
