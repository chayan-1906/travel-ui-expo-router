import {Tabs} from "expo-router";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import Colors from "../../constants/colors";
import {View} from "react-native";

function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: Colors.bgColor,
                borderTopWidth: 0,
                padding: 0,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: Colors.black,
            tabBarInactiveTintColor: '#999',
        }}>
            <Tabs.Screen name={'index'} options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name={'compass'} size={28} color={color}/>
                )
            }}/>
            <Tabs.Screen name={'category'} options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name={'space-dashboard'} size={28} color={color}/>
                )
            }}/>
            <Tabs.Screen name={'search'} options={{
                tabBarIcon: ({color}) => (
                    <View className={'bg-primary px-4 py-3 rounded-lg h-14'}>
                        <Ionicons name={'search-outline'} size={28} color={Colors.white}/>
                    </View>
                )
            }}/>
            <Tabs.Screen name={'bookmarks'} options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name={'bookmark'} size={28} color={color}/>
                )
            }}/>
            <Tabs.Screen name={'profile'} options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name={'user'} size={28} color={color}/>
                )
            }}/>
        </Tabs>
    );
}

export default TabsLayout;