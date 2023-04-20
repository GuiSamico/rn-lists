import {
    SafeAreaView,
    StyleSheet,
    VirtualizedList,
    StatusBar,
    TouchableWithoutFeedback,
    Text,
    View
} from "react-native";

import VirtualizedListItem from "../../components/VirtualizedListItem/VirtualizedListItem";

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
});

const getItemCount = (data) => 100;

export default function Main({navigation}) {
    return (
        <SafeAreaView style={style.container}>
            <VirtualizedList
                getItem={getItem}
                getItemCount={getItemCount}
                initialNumToRender={10}
                renderItem={
                    ({ item }) =>
                    (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {title: item.title})}>
                            <View>
                                <VirtualizedListItem title={item.title}/>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});