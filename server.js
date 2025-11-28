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

import router from "./main.js";
import db from "./db.js";

dotenv.config();

// __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares

//teste render
app.use(express.static("public"));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SERVIR ARQUIVOS DO FRONT-END
// public está NA RAIZ, não em ../public
app.use(express.static(path.join(__dirname, "public")));

// API
app.use("/api", router);

// Página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Porta do Render
const PORT = process.env.PORT || 10000;

// Iniciar DB + servidor
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






