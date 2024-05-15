import {FlatList, Text, TouchableOpacity, View} from "react-native";
import destinationCategories from "../data/categories";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../constants/colors";

function CategoryButtons({selectedCategory, setSelectedCategory}) {
    // const itemRef = useRef([]);
    // let scrollRef = React.createRef();
    console.log(selectedCategory);

    return (
        <View>
            <Text className={'px-5 text-3xl font-semibold text-black'}>Categories</Text>
            <FlatList
                // ref={scrollRef}
                data={destinationCategories}
                contentContainerStyle={{columnGap: 12, paddingHorizontal: 20}}
                horizontal showsHorizontalScrollIndicator={false} bounces={false}
                renderItem={({item, index}) => {
                    return (
                        <TouchableOpacity
                            // ref={(el) => itemRef.current[index] = el}
                            className={`flex-row items-center my-3 ${selectedCategory === item.title ? 'bg-primary' : 'bg-white'} px-5 py-3 rounded-xl space-x-1`}
                            style={{
                                elevation: 10,
                                shadowColor: '#333333',
                                shadowOffset: {width: 1, height: 2},
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}
                            onPress={() => {
                                setSelectedCategory(item.title);

                                /*let selected = itemRef.current[index];
                                selected?.measure((x) => {
                                    console.log(x);
                                    scrollRef.current?.scrollTo({x: x, y: 0, animated: true});
                                });*/
                            }}>
                            <MaterialCommunityIcons name={item.iconName} size={20} color={selectedCategory === item.title ? Colors.white : Colors.black}/>
                            <Text className={`${selectedCategory === item.title ? 'text-white font-extrabold' : 'text-black'} tracking-wide font-medium`}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}/>
        </View>
    );
}

export default CategoryButtons;