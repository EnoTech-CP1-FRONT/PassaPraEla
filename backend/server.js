import express from "express";
import cors from "cors";
import { open } from "sqlite";
import bcrypt from "bcrypt";
import sqlite3 from "sqlite3";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Configuração de diretórios para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;
let db;

// --- Middlewares ---
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

// --- Configuração do Multer (Upload) ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "images/players/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

// --- Endpoints ---

// Endpoint para cadastrar jogadoras
app.post("/jogadoras", upload.array("imagens", 15), async (req, res) => {
  const { nome, posicao, numero_camisa } = req.body;
  const files = req.files;
  const nomes = Array.isArray(nome) ? nome : [nome];
  const posicoes = Array.isArray(posicao) ? posicao : [posicao];
  const numeros = Array.isArray(numero_camisa)
    ? numero_camisa
    : [numero_camisa];

  if (!files || files.length !== nomes.length) {
    return res.status(400).json({ message: "Dados de jogadoras incompletos." });
  }

  try {
    await db.exec("BEGIN TRANSACTION");
    for (let i = 0; i < nomes.length; i++) {
      const url_imagem = `/images/players/${files[i].filename}`;
      await db.run(
        "INSERT INTO jogadoras (nome, numero_camisa, posicao, url_imagem) VALUES (?, ?, ?, ?)",
        [nomes[i], numeros[i], posicoes[i], url_imagem]
      );
    }
    await db.exec("COMMIT");
    res.status(201).json({
      success: true,
      message: `Sucesso! ${nomes.length} jogadora(s) cadastrada(s).`,
    });
  } catch (error) {
    await db.exec("ROLLBACK");
    console.error("Erro ao cadastrar jogadoras:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// **NOVO** - Endpoint para atualizar estatísticas e pontuação de uma jogadora
app.put("/jogadoras/:id/stats", async (req, res) => {
  const { id } = req.params;
  const {
    gols,
    assistencias,
    finalizacoes,
    desarmes,
    defesas,
    gol_sofrido,
    cartao_amarelo,
    cartao_vermelho,
  } = req.body;

  // Lógica de pontuação baseada na sua tabela de regras
  const pontuacao =
    gols * 8 +
    assistencias * 5 +
    finalizacoes * 1.5 +
    desarmes * 1 +
    defesas * 2 -
    gol_sofrido * 2 -
    cartao_amarelo * 2 -
    cartao_vermelho * 5;

  try {
    await db.run(
      `UPDATE jogadoras SET 
        gols = ?, assistencias = ?, finalizacoes = ?, desarmes = ?, defesas = ?, gol_sofrido = ?, 
        cartao_amarelo = ?, cartao_vermelho = ?, pontuacao = ? 
       WHERE id = ?`,
      [
        gols,
        assistencias,
        finalizacoes,
        desarmes,
        defesas,
        gol_sofrido,
        cartao_amarelo,
        cartao_vermelho,
        pontuacao,
        id,
      ]
    );
    res.status(200).json({
      success: true,
      message: "Pontuação atualizada com sucesso!",
      novaPontuacao: pontuacao,
    });
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// Endpoint para listar jogadoras
app.get("/jogadoras", async (req, res) => {
  try {
    const jogadoras = await db.all("SELECT * FROM jogadoras");
    res.status(200).json(jogadoras);
  } catch (error) {
    res.status(500).json({ message: "Erro interno." });
  }
});

// **CÓDIGO RESTAURADO** - Endpoint de cadastro de usuário
app.post("/cadastrar", async (req, res) => {
  const { email, senha, nomeDaEquipe } = req.body; // 1. Recebe o nome do time
  if (!email || !senha || !nomeDaEquipe) {
    return res
      .status(400)
      .json({ message: "Email, senha e nome do time são obrigatórios." });
  }
  try {
    const row = await db.get("SELECT * FROM usuarios WHERE email = ?", [email]);
    if (row) {
      return res
        .status(409)
        .json({ message: "Este email já está cadastrado." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);
    // 2. Insere o nome do time no banco de dados
    await db.run(
      "INSERT INTO usuarios (email, senha, nome_time) VALUES (?, ?, ?)",
      [email, hashedPassword, nomeDaEquipe]
    );
    res
      .status(201)
      .json({ success: true, message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error.message);
    res.status(500).json({ message: "Erro interno ao cadastrar usuário." });
  }
});

// **CÓDIGO RESTAURADO** - Endpoint de login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  // Credenciais de admin fixas
  const ADMIN_EMAIL = "admin@passapraela.com";
  const ADMIN_SENHA = "adminpassword";

  // 1. Verifica se é o admin
  if (email === ADMIN_EMAIL && senha === ADMIN_SENHA) {
    // Se for admin, retorna sucesso com o caminho de redirecionamento para a página de admin
    return res.status(200).json({
      success: true,
      message: "Login de admin bem-sucedido!",
      redirectTo: "/admin",
    });
  }

  // 2. Se não for admin, continua com a lógica de usuário normal
  try {
    const user = await db.get("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (isMatch) {
      // Se for usuário normal, retorna sucesso com o caminho para a página de times
      res.status(200).json({
        success: true,
        message: "Login bem-sucedido!",
        teamName: user.nome_time, // **NOVO**: Envia o nome do time para o frontend
        redirectTo: "/team",
      });
    } else {
      res.status(401).json({ message: "Senha incorreta." });
    }
  } catch (error) {
    console.error("Erro no login:", error.message);
    res.status(500).json({ message: "Erro interno no login." });
  }
});

// --- Inicialização do Servidor e DB ---
(async () => {
  try {
    db = await open({
      filename: path.join(__dirname, "passa-pra-ela.db"),
      driver: sqlite3.verbose().Database,
    });

    await db.exec(
      `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, email TEXT UNIQUE, senha TEXT, nome_time TEXT)`
    );
    await db.exec(
      `CREATE TABLE IF NOT EXISTS jogadoras (
        id INTEGER PRIMARY KEY, 
        nome TEXT, 
        numero_camisa INTEGER, 
        posicao TEXT, 
        url_imagem TEXT,
        gols INTEGER DEFAULT 0,
        assistencias INTEGER DEFAULT 0,
        finalizacoes INTEGER DEFAULT 0,
        desarmes INTEGER DEFAULT 0,
        defesas INTEGER DEFAULT 0,
        gol_sofrido INTEGER DEFAULT 0,
        cartao_amarelo INTEGER DEFAULT 0,
        cartao_vermelho INTEGER DEFAULT 0,
        pontuacao REAL DEFAULT 0
      )`
    );

    app.listen(port, () => {
      console.log(`✅ Backend rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Falha ao iniciar o servidor:", error);
  }
})();
