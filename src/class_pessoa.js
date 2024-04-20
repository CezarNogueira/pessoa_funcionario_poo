class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    mostrarDados() {
        console.log("------> Pessoa");
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`CPF: ${this.cpf}`);
    }

    atualizarDados(novoNome, novaIdade, novoCpf) {
        this.nome = novoNome;
        this.idade = novaIdade;
        this.cpf = novoCpf;
    }
}

const Pessoa1 = new Pessoa("Cezar", 20, "909.694.219-06");
//Pessoa1.mostrarDados();

export default Pessoa;