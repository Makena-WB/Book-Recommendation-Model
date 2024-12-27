import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2" style={{ marginTop: 15 }}>
        <Image
            source={icon}
            resizeMode="center"
            tintColor={color}
            className="w-6 h-6"
        />
        <Text 
        style={{
            color: color,
            fontSize: focused ? 10 : 9, // Slightly smaller size for bold text
            fontWeight: focused ? "bold" : "normal",
            textAlign: "center",
          }}>
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
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#666370',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#1C1F33',
                    borderTopWidth: 5,
                    borderTopColor: '#232533',
                    height: 80,
                    paddingVertical: 10,
                }
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