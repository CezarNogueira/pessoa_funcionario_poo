import Funcionario from "./class_funcionario.js";

class Dependente extends Funcionario {
    constructor (nome, idade, cpf, registro) {
        super(nome, idade, cpf, registro);
    }

    mostrarDados() {
        //super.mostrarDados();
    }
}

const Dependente1 = new Dependente("Eliel", 17, "758.987.212-08", "00001");
Dependente1.mostrarDados();

export default Dependente;