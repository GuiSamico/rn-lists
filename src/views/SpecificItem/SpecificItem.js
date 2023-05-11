import { SectionList } from "react-native";
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text
} from "react-native";
import { useRoute } from '@react-navigation/native';

import SectionListItem from "../../components/SectionListItem/SectionListItem";
import { TouchableWithoutFeedback } from "react-native";

const DATA = [
    {
        titulo: 'Eletrônicos',
        data: ['TV', 'Caixa de Som', 'Toca-discos Retrô']
    },
    {
        titulo: 'Vestuário',
        data: ['Camisas', 'Camisetas', 'Casacos']
    },
    {
        titulo: 'Livros',
        data: ['Ficção', 'Suspense', 'Policiais']
    }
];

export default function SpecificItem({ navigation }) {
    const route = useRoute();
    const title = route.params.title;

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.sectionHeader}>{title}</Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={
                    ({ item }) => <SectionListItem title={item} />
                }
                renderSectionHeader={
                    ({ section: { titulo } }) => (
                        <Text style={style.header}>{titulo}</Text>
                    )
                }
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        fontSize: 30,
        backgroundColor: "#c1c1c1",
        fontFamily: "Segoe UI",
        fontWeight: "bold",
        padding: 10,
    },
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
