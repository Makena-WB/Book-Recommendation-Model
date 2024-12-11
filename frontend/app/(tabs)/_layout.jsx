import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center">
        <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6"
        />
        <Text className={ `${focused ? 'font-semibold' : 'font-normal'} text-xs` }>
            {name}
        </Text>
    </View>
  )  
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='bookmark'
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Saved"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='stats'
                options={{
                    title: 'Stats',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            name="Stats"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout