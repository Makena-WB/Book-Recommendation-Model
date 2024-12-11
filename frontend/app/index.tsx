import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const index = () => {
    return (
        <SafeAreaView>
            <View className='h-screen items-center justify-center'>
                <Text className='font-sans hover:font-serif text-3xl text-amber-900'>ShelfScape</Text>
                <Text className='font-sans hover:font-serif text-2xl text-zinc-700'>For readers, By readers</Text>
                <StatusBar style="auto" />
                <Link href={"/home"} style={{ color: 'blue'}}>Go to Home</Link>
            </View>
        </SafeAreaView>
    );
};

export default index;

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>ShelfScape</Text>
            <StatusBar style="auto" />
            <Link href={"/profile"} style={{ color: 'blue'}}>Go to Profile</Link>
        </View>

        <View>
                <Text className='text-2xl text-red-600'>Nativewind</Text>
                <Text className='text-3xl'>Hello</Text>
            </View>

            <View className='viewBox' />
    );
} */