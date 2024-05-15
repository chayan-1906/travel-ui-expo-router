import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import Colors from "../constants/colors";
import {router} from "expo-router";
import {useEffect, useState} from "react";

function Listings({listings, category}) {
    const [isLoading, setIsLoading] = useState(false);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        console.log('Update Listing');
        setIsLoading(true);
        if (category === 'All') {
            setFilteredList(listings);
        } else {
            setFilteredList(listings.filter((item) => {
                return item.category === category;
            }));
        }
        setTimeout(() => setIsLoading(false), 600);
    }, [category]);

    useEffect(() => {
        console.log(filteredList.length)
    }, [filteredList]);

    return (
        <View>
            <FlatList
                data={isLoading ? [] : filteredList}
                contentContainerStyle={{columnGap: 12, paddingHorizontal: 20}}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => router.push(`/listings/${item.id}`)}>
                        <View className={'w-56 bg-white p-4 rounded-lg'}>
                            <Image source={{uri: item.image}} className={'w-48 h-48 rounded-lg mb-7'}/>
                            <View className={'absolute top-44 right-7 bg-primary p-3 rounded-full border-2 border-white'}>
                                <Ionicons name={'bookmark-outline'} size={20} color={Colors.white}/>
                            </View>
                            <Text className={'text-lg font-semibold text-black mb-3'} numberOfLines={1} ellipsizeMode={'tail'}>{item.name}</Text>
                            <View className={'flex-row justify-between items-center'}>
                                <View className={'flex-row items-center space-x-1'}>
                                    <FontAwesome5 name={'map-marker-alt'} size={18} color={Colors.primaryColor}/>
                                    <Text className={'text-lg'}>{item.location}</Text>
                                </View>
                                <Text className={'text-lg font-medium text-primary'}>${item.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}/>
        </View>
    );
}

export default Listings;