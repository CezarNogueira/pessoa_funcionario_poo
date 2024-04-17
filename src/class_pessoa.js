class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDados() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const Pessoa1 = new Pessoa("Cezar", 20);
Pessoa1.mostrarDados();

export default Pessoa;