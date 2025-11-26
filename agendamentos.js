
import { DataTypes } from "sequelize";
import db from "./db.js";

const Agendamento = db.define("agendamentos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cliente: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  servico: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  profissional: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: "agendamentos",
  timestamps: false,
});

export default Agendamento;
