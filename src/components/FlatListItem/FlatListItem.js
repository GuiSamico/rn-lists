import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const DEFAULT_IMAGES_PATH = "../../assets/images/";

export default function FlatListItem({ title, avatar }) {
    return (
        <View style={styles.item}>
            <View>
                <Image 
                    style={styles.image}
                    source={
                        require("../../assets/images/harry.png")
                    }
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.description}>Lorem ipsum is dolor ecit amet conseqtur adiscipli elit</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#0b1b1e",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: "left",
        borderRadius: 10,
        flexDirection: "row",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 3,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: "left"
    },
    text: {
        fontSize: 22,
        color: "#fff",
        alignSelf: "left",
        fontFamily: "Segoe UI",
    },
    description: {
        fontSize: 12,
        color: "#fff",
        alignSelf: "center",
        fontFamily: "Segoe UI",
        fontStyle: "italic",
    }
});