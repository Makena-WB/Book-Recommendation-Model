import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style = {styles.container}>
        <Text>ShelfScape</Text>
        <StatusBar style = "auto" />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
          flex:1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
  },

});
