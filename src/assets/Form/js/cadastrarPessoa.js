const express = require("express");
const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());

app.post("/cadastrarPessoa", (req, res) => {
    const { nome, idade, cpf } = req.body;
    res.status(201).json({ mensagem: "Pessoa cadastrada com sucesso!", dadosRecebidos: { nome, idade, cpf } });
});

app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});