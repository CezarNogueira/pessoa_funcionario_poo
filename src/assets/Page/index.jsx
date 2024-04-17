import React, { useState } from "react";
import "./css/style.css";

function Funcionario() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cargo, setCargo] = useState("");
    const handleCadastro = () => {
        alert(`${nome}\n${idade}\n${cargo}`);
    }

    return(
        <div className="funcionario_wrapper">
            <div className="overlay"></div>
            <form className="styles-form">

                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome"/>

                <input type="text" name="idade" value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Digite a Idade"/>

                <input type="text" name="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Digite o Cargo"/> 

                <button onClick={handleCadastro}>CADASTRAR</button>

            </form>
        </div>
    );
}

export default Funcionario;