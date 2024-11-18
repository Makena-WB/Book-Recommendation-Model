import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="expo">
      <Text className="text-3xl">ShelfScape</Text>
      <StatusBar style="auto"/>
      <Link href={"/profile"} style={{ color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}


