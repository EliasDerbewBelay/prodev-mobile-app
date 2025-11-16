import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#34967c",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <EvilIcons name="heart" size={27} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "inbox",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // headerShown: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeRootLayout;
