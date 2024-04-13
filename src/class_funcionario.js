const Pessoa = require("./class_pessoa");

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    mostrarDados() {
        super.mostrarDados();
        console.log(`Sou um ${this.cargo}.`);
    }
}

module.exports = { Funcionario };