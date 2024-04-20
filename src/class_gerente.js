import Funcionario from "./class_funcionario.js";

class Gerente extends Funcionario {
    constructor (nome, idade, cpf, cargo, setor) {
        super(nome, idade, cpf, cargo);
        this.setor = setor;
    }

    mostrarDadosGer() {
        console.log("---> Gerente");
        super.mostrarDados();
        console.log(`Setor: ${this.setor}`);
    }
}

const Gerente1 = new Gerente("Cezar", 20, "909.694.219-06", "Administrador", "Administrativo");
Gerente1.mostrarDadosGer();

export default Gerente;