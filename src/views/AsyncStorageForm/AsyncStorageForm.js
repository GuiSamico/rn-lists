import React, { useState } from 'react';

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

import DataManager from '../../app/data/DataManager';

export default function AsyncStorageForm({navigation}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [curso, setCurso] = useState('');
    const salvar = () => {
        DataManager.createAluno(nome, sobrenome, idade, curso).then(() => {
            alert(`Aluno criado com sucesso!`);
            navigation.navigate('AsyncStorageList');
        });
    };
    return (
        <SafeAreaView style={style.container}>
            <View style={style.nestedContainer}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View>
                    <Image style={style.logoEstacio} source={require("../../assets/images/logo01.png")} />
                    <Text style={style.formTitle}>Cadastro de Alunos</Text>
                </View>
                <View>
                    <TextInput style={style.textInput} placeholder="Nome" value={nome} onChangeText={setNome} />
                    <TextInput style={style.textInput} placeholder="Sobrenome" value={sobrenome} onChangeText={setSobrenome} />
                    <TextInput style={style.textInput} placeholder="Idade" value={idade} onChangeText={setIdade} />
                    <TextInput style={style.textInput} placeholder="Curso" value={curso} onChangeText={setCurso} />
                </View>
                <View>
                    <TouchableOpacity style={style.touchable} onPress={salvar}>
                        <View style={style.confirmButton}>
                            <Text style={style.buttonText}>Salvar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

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
