/*import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import router from "./main.js"; // API de agendamentos

dotenv.config({ path: "./variaveis.env" });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Rotas da API
app.use("/api", router);

// Rota principal → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Porta
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)); */







// testando para o render

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import router from "./main.js";    // Suas rotas da API
import db from "./db.js";          // Conexão com PostgreSQL (Sequelize)

// Carrega variáveis de ambiente (local)
dotenv.config({ path: "./variaveis.env" });

// Necessário para usar __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializa o app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rotas da API
app.use("/api", router);

// Rota principal (homepage)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Porta automática do Render
const PORT = process.env.PORT || 10000;

// Sincronizar BD e iniciar servidor
db.sync()
  .then(() => {
    console.log("📦 Banco sincronizado com sucesso");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao sincronizar o banco de dados:", err);
    process.exit(1);
  });



