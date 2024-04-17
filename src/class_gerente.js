import Funcionario from "./class_funcionario.js";

class Gerente extends Funcionario {
    constructor (nome, idade, cargo, setor) {
        super(nome, idade, cargo);
        this.setor = setor;
    }

    mostrarDados() {
        console.log(`Sou Gerente do setor ${this.setor}.`);
    }
}

const Gerente1 = new Gerente("Cezar", 20, "Administrador", "Administrativo");
Gerente1.mostrarDados();

export default Gerente;