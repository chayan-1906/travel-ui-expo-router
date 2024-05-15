import {Dimensions, Platform, Text, TouchableOpacity, View} from "react-native";
import {router, Stack, useLocalSearchParams} from "expo-router";
import listings from '../../data/destinations.json';
import {FontAwesome, FontAwesome5, Ionicons} from "@expo/vector-icons";
import Colors from "../../constants/colors";
import Animated, {interpolate, SlideInDown, useAnimatedRef, useAnimatedStyle, useScrollViewOffset} from "react-native-reanimated";

let {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;

function ListingDetails() {
    let {id} = useLocalSearchParams();
    const filteredItem = listings.find((item) => item.id === id);

    let scrollRef = useAnimatedRef();
    let scrollOffset = useScrollViewOffset(scrollRef);
    let imageAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75],
                    ),
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [2, 1, 1],
                    ),
                }
            ],
        };
    });

    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => (
                    <TouchableOpacity
                        style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                        className={'p-1 rounded-lg'}
                        onPress={() => router.back()}>
                        <View className={'bg-white p-2 rounded-lg'}>
                            <Ionicons name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back-sharp'} size={20}/>
                        </View>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                        className={'p-1 rounded-lg'}
                        onPress={() => {
                        }}>
                        <View className={'bg-white p-2 rounded-lg'}>
                            <Ionicons name={'bookmark-outline'} size={20}/>
                        </View>
                    </TouchableOpacity>
                )
            }}/>

            <View className={'flex-1 bg-white'}>
                <Animated.ScrollView ref={scrollRef} className={'pb-38'} showsVerticalScrollIndicator={false}>
                    <Animated.Image source={{uri: filteredItem.image}} style={[{width: width, height: IMG_HEIGHT}, imageAnimationStyle]}/>
                    <View className={'p-5 bg-white'}>
                        {/* name */}
                        <Text className={'text-2xl font-semibold text-black tracking-wide'}>{filteredItem.name}</Text>

                        {/* location */}
                        <View className={'flex-row mt-1 mb-3 items-center space-x-1'}>
                            <FontAwesome5 name={'map-marker-alt'} size={18} color={Colors.primaryColor}/>
                            <Text className={'text-lg font-medium text-primary'}>{filteredItem.location}</Text>
                        </View>

                        {/* duration, persons, rating */}
                        <View className={'flex-row my-5 justify-between'}>
                            {/* duration icon & text */}
                            <View className={'flex-row space-x-1'}>
                                {/* duration icon */}
                                <View className={'px-2 py-1 border-2 border-transparent rounded-lg items-center justify-center bg-bg'}>
                                    <Ionicons name={'time'} size={18} color={Colors.primaryColor}/>
                                </View>
                                {/* duration */}
                                <View>
                                    <Text className={'text-[#999]'}>Duration</Text>
                                    <Text className={'text-lg font-medium'}>{filteredItem.duration} Days</Text>
                                </View>
                            </View>

                            {/* person icon & text */}
                            <View className={'flex-row space-x-1'}>
                                {/* person icon */}
                                <View className={'px-2 py-1 border-2 border-transparent rounded-lg items-center justify-center bg-bg'}>
                                    <FontAwesome name={'users'} size={18} color={Colors.primaryColor}/>
                                </View>
                                {/* person */}
                                <View>
                                    <Text className={'text-[#999]'}>Person</Text>
                                    <Text className={'text-lg font-medium'}>{filteredItem.duration}</Text>
                                </View>
                            </View>

                            {/* rating icon & text */}
                            <View className={'flex-row space-x-1'}>
                                {/* rating icon */}
                                <View className={'px-2 py-1 border-2 border-transparent rounded-lg items-center justify-center bg-bg'}>
                                    <Ionicons name={'star'} size={18} color={Colors.primaryColor}/>
                                </View>
                                {/* rating */}
                                <View>
                                    <Text className={'text-[#999]'}>Rating</Text>
                                    <Text className={'text-lg font-medium'}>{filteredItem.rating}</Text>
                                </View>
                            </View>
                        </View>

                        <Text className={'text-xl text-black leading-6 tracking-wide'}>{filteredItem.description}</Text>
                    </View>
                </Animated.ScrollView>
                {/* image */}
            </View>

            {/* footer */}
            <Animated.View className={`absolute bottom-0 flex-row p-5 pb-7 w-full space-x-3`} entering={SlideInDown.delay(200)}>
                <TouchableOpacity className={'flex-1 bg-primary p-5 rounded-lg items-center'}>
                    <Text className={'text-white text-lg font-bold uppercase'}>Book Now</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'basis-1/3 bg-black p-5 rounded-lg items-center'}>
                    <Text className={'text-white text-lg font-bold uppercase'}>${filteredItem.price}</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
}

export default ListingDetails;