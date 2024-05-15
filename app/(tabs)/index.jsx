import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Stack} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../constants/colors";
import {useHeaderHeight} from "@react-navigation/elements";
import CategoryButtons from "../../components/CategoryButtons";
import {useState} from "react";
import Listings from "../../components/Listings";
import listings from '../../data/destinations.json';
import GroupListings from "../../components/GroupListings";
import groupData from '../../data/groups.json';

function TabIndex() {
    let headerHeight = useHeaderHeight();
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <>
            <Stack.Screen options={{
                headerBackground: () => <View style={{backgroundColor: Colors.bgColor}}/>,
                headerTitle: '',
                headerLeft: () => (
                    <TouchableOpacity className={'ml-5'} onPress={() => {
                    }}>
                        <Image source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=female'}} className={'h-10 w-10 rounded-lg'}/>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity className={'mr-5 bg-white p-3 rounded-lg'} onPress={() => {
                    }} style={{
                        elevation: 10,
                        shadowColor: Colors.black,
                        shadowOffset: {width: 2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                    }}>
                        <Ionicons name={'notifications'} size={20}/>
                    </TouchableOpacity>
                ),
            }}/>

            <View className={`flex-1 bg-bg`}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* tagline */}
                    <Text className={'text-4xl font-bold text-black mt-3 px-5'}>Explore the beautiful world!</Text>

                    {/* search & filter */}
                    <View className={'flex-row my-5 px-5 items-center space-x-2'}>
                        <View className={'flex-row flex-1 items-center bg-white p-3 rounded-lg space-x-2'}>
                            <Ionicons name={'search'} size={18}/>
                            <TextInput placeholder={'Search...'} className={'flex-1'}/>
                        </View>
                        <TouchableOpacity className={'bg-primary p-3 rounded-md'} onPress={() => {
                        }}>
                            <Ionicons name={'options'} size={28} color={Colors.white}/>
                        </TouchableOpacity>
                    </View>

                    <CategoryButtons selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

                    <Listings listings={listings} category={selectedCategory}/>

                    <GroupListings listings={groupData}/>
                </ScrollView>
            </View>
        </>
    );
}

export default TabIndex;