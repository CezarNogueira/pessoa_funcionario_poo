import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
import Pessoa from "./class_pessoa.js";

app.use(express.json());
app.use(cors());

app.post("/cadastrarPessoa", (req, res) => {
    const { nome, idade, cpf } = req.body;

    const novaPessoa = new Pessoa (nome, idade, cpf);

    res.status(201).json({
        mensagem: "Pessoa cadastrada com sucesso!",
        pessoa: novaPessoa,
        dadosRecebidos: { nome, idade, cpf } 
    });
});

app.listen(port, () => {
    console.log(`Servidor Express rodando na porta ${port}`);
});