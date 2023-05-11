import AsyncStorage from '@react-native-async-storage/async-storage';

import { Aluno } from '../entities/Aluno';

const createAluno = (nome, sobrenome, idade, curso) => {
    const aluno = new Aluno(nome, sobrenome, idade, curso);
    return saveAlunoOnAsyncStorage(aluno);
};

const saveAlunoOnAsyncStorage = async (aluno) => {
    try {
        const alunoJSON = JSON.stringify(aluno);
        await AsyncStorage.setItem(aluno.matricula, alunoJSON);
    } catch (error) {
        console.log(error);
    }
}

const getAlunoFromAsyncStorage = async (matricula) => {
    try {
        const alunoJSON = await AsyncStorage.getItem(matricula);
        return JSON.parse(alunoJSON);
    } catch (error) {
        console.log(error);
    }
};

const updateAlunoOnAsyncStorage = async (aluno) => {
    try {
        const alunoJSON = JSON.stringify(aluno);
        await AsyncStorage.mergeItem(aluno.matricula, alunoJSON);
    } catch (error) {
        console.log(error);
    }
}

const deleteAlunoFromAsyncStorage = async (matricula) => {
    try {
        await AsyncStorage.removeItem(matricula);
    } catch (error) {
        console.log(error);
    }
};

const getAllAlunosFromAsyncStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const alunos = await AsyncStorage.multiGet(keys);
        const returnableAlunos = [];
        alunos.forEach(aluno => {
            try {
                const parsedAluno = JSON.parse(aluno[1]);
                returnableAlunos.push(parsedAluno);
            } catch (ignoreError) {
            }
        });
        return returnableAlunos;
    } catch (error) {
        console.log(error);
    }
};

export default class DataManager {
    static createAluno = createAluno;
    static getAlunoFromAsyncStorage = getAlunoFromAsyncStorage;
    static updateAlunoOnAsyncStorage = updateAlunoOnAsyncStorage;
    static deleteAlunoFromAsyncStorage = deleteAlunoFromAsyncStorage;
    static getAllAlunosFromAsyncStorage = getAllAlunosFromAsyncStorage;
}