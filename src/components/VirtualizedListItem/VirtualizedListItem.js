import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function VirtualizedListItem({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#0b0b0e",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 100,
        justifyContent: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 32,
        color: "#fff",
    }
});