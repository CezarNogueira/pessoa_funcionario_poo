import Pessoa from "./class_pessoa.js";

class Funcionario extends Pessoa {
    constructor(nome, idade, cpf, cargo, registro) {
        super(nome, idade, cpf);
        this.cargo = cargo;
        this.registro = registro;
    }

    mostrarDadosFunc() {
        super.mostrarDados();
        console.log("---> Funcionario");
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Registro: ${this.registro}`);
    }

    atualizarDados(novoNome, novaIdade, novoCpf, novoCargo, novoRegistro) {
        super.atualizarDados(novoNome, novaIdade, novoCpf);
        this.cargo = novoCargo;
        this.registro = novoRegistro;
    }
}

    const Funcionario1 = new Funcionario("Cezar", 20, "909.694.219-06", "Estagiario", "00001");
    Funcionario1.mostrarDadosFunc();

    Funcionario1.atualizarDados("Cezar Nogueira", 21, "909.694.219-06", "Programador", "00001");
    Funcionario1.mostrarDadosFunc();

    export default Funcionario;