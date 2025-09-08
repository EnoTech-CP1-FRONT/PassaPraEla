import express from "express";
import cors from "cors";
import { open } from "sqlite";
import bcrypt from "bcrypt";
import sqlite3 from "sqlite3";

const app = express();
const port = 3001; // Porta para o backend rodar
let db;

// Middlewares
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Permite que o servidor entenda JSON no corpo das requisições

// Endpoint da API para o cadastro
app.post("/cadastrar", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    // Verifica se o usuário já existe
    const row = await db.get("SELECT * FROM usuarios WHERE email = ?", [email]);
    if (row) {
      return res
        .status(409)
        .json({ message: "Este email já está cadastrado." });
    }

    // Criptografa a senha antes de salvar
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    // Insere o novo usuário
    await db.run("INSERT INTO usuarios (email, senha) VALUES (?, ?)", [email, hashedPassword]);
    console.log(`Usuário ${email} cadastrado com sucesso!`);
    res
      .status(201)
      .json({ success: true, message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error.message);
    res.status(500).json({
      message: "Erro interno no servidor ao tentar cadastrar o usuário.",
    });
  }
});

// Endpoint da API para o login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    const user = await db.get("SELECT * FROM usuarios WHERE email = ?", [email]);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    // Compara a senha enviada com a senha criptografada no banco
    const isMatch = await bcrypt.compare(senha, user.senha);

    if (isMatch) {
      res.status(200).json({ success: true, message: "Login bem-sucedido!" });
    } else {
      res.status(401).json({ message: "Senha incorreta." });
    }
  } catch (error) {
    console.error("Erro no login:", error.message);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// Inicia o servidor e o banco de dados
(async () => {
  try {
    db = await open({
      filename: "./passa-pra-ela.db",
      driver: sqlite3.verbose().Database,
    });

    await db.exec(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            email TEXT UNIQUE NOT NULL, 
            senha TEXT NOT NULL
        )`);

    app.listen(port, () => {
      console.log(`Backend rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error(
      "Falha ao iniciar o servidor ou conectar ao banco de dados:",
      error
    );
  }
})();
