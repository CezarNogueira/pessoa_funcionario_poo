import React, { useState } from "react";
import "./css/form_module.css"

function FormCadastro() {

    const [formValores, setFormValores] = useState({
        nome: "",
        idade: "",
        cpf: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();

            const response = await fetch("./Form", {
                method: "POST",
                body: JSON.stringify(formValores)
            });
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (err) {
            console.log("Erros ao enviar", err)
        }
    }

    return (
        <form className="styles-form" onSubmit={handleSubmit}>

            <h2>CADASTRAR</h2>

            <input type="text" name="nome" defaultValue={formValores.nome} onChange={handleChange} placeholder="Digite o Nome"/>

            <input type="text" name="idade" defaultValue={formValores.idade} onChange={handleChange} placeholder="Digite a Idade"/>

            <input type="text" name="cpf" defaultValue={formValores.cpf} onChange={handleChange} placeholder="Digite o CPF"/> 

            <button type="submit">CADASTRAR</button>

        </form>
    );
}

export default FormCadastro;