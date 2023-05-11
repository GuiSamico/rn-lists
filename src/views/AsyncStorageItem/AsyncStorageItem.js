import {
    SafeAreaView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';


export default function AsyncStorageItem({ navigation, produto, onDelete }) {
    return (
        // <SafeAreaView id={produto.matricula}>
        <View>
            <View>
                <Text>{produto.matricula}</Text>
                <Text>{produto.nome}</Text>
                <Text>{produto.sobrenome}</Text>
                <Text>{produto.idade}</Text>
                <Text>{produto.curso}</Text>
            </View>
            <View>
                <TouchableOpacity style={style.touchable}>
                    <View style={style.deleteButton}>
                        <Text style={style.buttonText}>X</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        // </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#ffffff',
    },
    nestedContainer: {
        flex: 1,
        alignItems: 'center',
    },
    formTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    confirmButton: {
        backgroundColor: '#c0c0c0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 300,
    },
    deleteButton: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 300,
    },
    touchable: {
        marginTop: 10,
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: 300,
    },
    logoEstacio: {
        width: 200,
        height: 200,
    }
});