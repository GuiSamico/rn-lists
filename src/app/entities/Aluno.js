export class Aluno {
    constructor(nome, sobrenome, idade, curso) {
        this.matricula = Math.random().toString(36).substr(2, 9);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.curso = curso;
    }
}