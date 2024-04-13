class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDados() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.idade} anos.`)
    }
}

module.exports= { Pessoa };