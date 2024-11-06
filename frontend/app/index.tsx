import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import "./global.css"


export default function HomeScreen() {
  return (
    <View>
        <Text>ShelfScape</Text>
        <StatusBar style = "auto" />
        <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
);
}


