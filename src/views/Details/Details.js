import { FlatList } from "react-native";
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text
} from "react-native";
import { useRoute } from '@react-navigation/native';

import FlatListItem from "../../components/FlatListItem/FlatListItem";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
        avatar: "logo01.png"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        avatar: "harry.png"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        avatar: "mario.png"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Third Item",
        avatar: "pinoquio.jpg"
    },
];

export default function Details({navigation}) {
    const route = useRoute();
    const title = route.params.title;

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.sectionHeader}>{title}</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <FlatListItem title={item.title} avatar={item.avatar}/>
                )}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    sectionHeader: {
        fontSize: 40,
        color: "#000",
        alignSelf: "left",
        fontFamily: "Segoe UI",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 15,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
