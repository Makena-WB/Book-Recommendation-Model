import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { images } from '../constants';


const index = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5" >
                        <Text className="text-3xl text-white font-serif font-pthin text-center">"In the end, we all become stories"</Text>

                    </View>

                </View>
            </ScrollView>
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