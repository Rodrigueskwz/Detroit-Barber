/*CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente VARCHAR(100),
  telefone VARCHAR(20),
  servico VARCHAR(50),
  profissional VARCHAR(50),
  data DATE,
  hora TIME,
  observacoes TEXT
);*/



CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  cliente VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  servico VARCHAR(50) NOT NULL,
  profissional VARCHAR(50) NOT NULL,
  data DATE NOT NULL,
  hora VARCHAR(10) NOT NULL,
  observacoes TEXT
);






// agendamentos.js — Modelo Sequelize (Estrutura B completa)

import { DataTypes } from "sequelize";
import db from "./db.js";

const Agendamento = db.define("agendamentos", {
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profissional: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: "agendamentos",
  timestamps: false, // evita createdAt / updatedAt automáticos
});

export default Agendamento;
