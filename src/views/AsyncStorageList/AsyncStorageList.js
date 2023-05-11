import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import { useIsFocused } from '@react-navigation/native';

import DataManager from '../../app/data/DataManager';
import AsyncStorageItem from '../AsyncStorageItem/AsyncStorageItem';

import FlatListAlunoItem from '../../components/FlatListAluno/FlatListAlunoItem';

export default function AsyncStorageList({navigation}) {
    const [alunos, setAlunos] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        async function fetchData() {
            const alunos = await DataManager.getAllAlunosFromAsyncStorage();
            console.log(alunos);
            setAlunos(alunos);
        }
        fetchData();
    }, [isFocused]);

    const getMatricula = item => {
        return item.matricula;
    }

    const deleteAluno = async (matricula) => {
        await DataManager.deleteAlunoFromAsyncStorage(matricula).then(async () => {
            const alunos = await DataManager.getAllAlunosFromAsyncStorage();
            setAlunos(alunos);
        });
    };

    return (
        <SafeAreaView>
            {alunos.length === 0 && <Text>Nenhum aluno cadastrado</Text>}
            <View>
                <TouchableOpacity style={style.novoAlunoButton} onPress={() => navigation.navigate('AsyncStorageForm')}>
                    <Text style={style.buttonText}>Adicionar aluno</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={alunos}
                    keyExtractor={getMatricula}
                    renderItem={
                        ({item}) => <FlatListAlunoItem aluno={item} onDelete={()=>deleteAluno(item.matricula)}/>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const style = new StyleSheet.create({
    novoAlunoButton: {
        backgroundColor: 'blue',
        color: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
    },
    scrollContainer: {
        height: '100%',
    }
});