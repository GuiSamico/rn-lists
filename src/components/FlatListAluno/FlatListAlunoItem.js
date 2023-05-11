import { View, Text, Image } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

const DEFAULT_IMAGES_PATH = "../../assets/images/";

export default function FlatListAlunoItem({ aluno, onDelete }) {
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
                <Text style={styles.text}>{aluno.nome} {aluno.sobrenome}</Text>
                <Text style={styles.description}>{aluno.idade} | {aluno.curso}</Text>
            </View>
            <View style={styles.excludeContainer}>
                <TouchableOpacity onPress={onDelete}>
                    <Text style={styles.deleteButton}>Excluir</Text>
                </TouchableOpacity>
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
    excludeContainer: {
        marginLeft: 60,
        justifyContent: "right"
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
        alignSelf: "left",
        fontFamily: "Segoe UI",
        fontStyle: "italic",
    },
    deleteButton: {
        marginTop: 10,
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        alignSelf: "right",
    },
});