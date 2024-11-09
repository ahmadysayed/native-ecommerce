import { Feather, Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

function WelcomeView() {
  return (
    <View style={{}}>
      <View>
        <Text style={styles.welcomeTxt("#000", 70)}>Find The Most</Text>

        <Text style={styles.welcomeTxt("#2A4D50", 0)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("I am tapped");
          }}
        >
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>

        <TextInput
          placeholder="What are you looking for"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: (color, top) => ({
    fontSize: 38,
    color: color,
    marginTop: top,
    marginHorizontal: 12,
  }),

  searchIcon: {
    marginTop: 12,
    color: "#83829A",
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 16,
  },
  searchInput: {
    width: "100%",
  },
});

export default WelcomeView;
