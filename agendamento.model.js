import { DataTypes } from "sequelize";
import db from "./db.js";

const Agendamento = db.define("Agendamento", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clientes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
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
  observacoes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Agendamento;
