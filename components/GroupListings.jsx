import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/colors";

function GroupListings({listings}) {
    return (
        <View className={'my-5'}>
            <Text className={'px-5 text-3xl font-semibold text-black'}>Top Travel Groups</Text>
            <FlatList
                data={listings}
                horizontal showsHorizontalScrollIndicator={false} bounces={false}
                contentContainerStyle={{columnGap: 12, paddingHorizontal: 20}}
                renderItem={({item}) => (
                    <TouchableOpacity className={'flex-row items-center bg-white p-3 my-3 rounded-lg space-x-5'}>
                        <Image source={{uri: item.image}} className={'w-20 h-24 rounded-lg'}/>
                        <View>
                            <Text className={'text-lg font-semibold text-black'}>{item.name}</Text>
                            <View className={'flex-row items-center space-x-1'}>
                                <Ionicons name={'star'} size={16} color={Colors.primaryColor}/>
                                <Text className={'font-semibold text-black'}>{item.rating}</Text>
                                <Text className={'font-semibold'} style={{color: '#999'}}>({item.reviews})</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default GroupListings;