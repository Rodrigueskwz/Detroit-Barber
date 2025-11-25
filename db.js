// db.js — Conexão com PostgreSQL usando Sequelize

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Conexão com PostgreSQL do Render
const db = new Sequelize(
  process.env.DB_NAME,     // nome do banco
  process.env.DB_USER,     // usuário
  process.env.DB_PASSWORD, // senha
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
);

// Testar conexão
db.authenticate()
  .then(() => console.log("🟢 Conectado ao PostgreSQL com sucesso!"))
  .catch((err) => console.error("🔴 Erro ao conectar ao banco:", err));

export default db;
