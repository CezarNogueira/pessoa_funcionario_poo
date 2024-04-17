import Pessoa from "./class_pessoa.js";

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    mostrarDados() {
        //super.mostrarDados();
        console.log(`Sou um ${this.cargo}.`);
    }
}

    const Funcionario1 = new Funcionario("Cezar", 20, "Administrador");
    Funcionario1.mostrarDados();

    export default Funcionario;