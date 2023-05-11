import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const DEFAULT_IMAGES_PATH = "../../assets/images/";

export default function SectionListItem({ title }) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#c1c1c1",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: "left",
        borderRadius: 10,
        flexDirection: "row",
    },
    text: {
        fontSize: 22,
        color: "#000",
        alignSelf: "left",
        fontFamily: "Segoe UI",
    },
    textContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    }
});