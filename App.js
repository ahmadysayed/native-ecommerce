import { SafeAreaView } from "react-native";
import WelcomeComponent from "./src/components/WelcomeComponent";
import HomeCarouselComponent from "./src/components/HomeCarouselComponent";

export default function App() {
  return (
    <SafeAreaView>
      <WelcomeComponent />
      <HomeCarouselComponent />
    </SafeAreaView>
  );
}
