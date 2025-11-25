/*const API_BASE = "/api/agendamentos";



// testando para mandar pro render 
import Agendamento from "./agendamentos.js";

 

// === Função de Pop-up estilizado ===
function showPopup(mensagem, tipo = "sucesso") {
  const popup = document.createElement("div");
  popup.className = `popup ${tipo}`;
  popup.textContent = mensagem;
  document.body.appendChild(popup);

  // Mostra com animação
  setTimeout(() => popup.classList.add("visivel"), 50);

  // Desaparece depois de 3 segundos
  setTimeout(() => {
    popup.classList.remove("visivel");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

const form = document.querySelector(".form-servico");

// Função para enviar agendamento
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Pega os valores do formulário
  const data = {
    cliente: form.querySelector('input[type="text"]').value,
    telefone: form.querySelector('input[type="tel"]')?.value || "",
    servico: form.querySelector('select:nth-of-type(1)').value,
    profissional: form.querySelector('select:nth-of-type(2)').value,
    data: form.querySelector('input[type="date"]').value,
    hora: form.querySelector('select:nth-of-type(3)').value,
    observacoes: form.querySelector('textarea[name="mensagem"]').value || ""
  };

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Erro ao enviar agendamento");

    showPopup("✅ Seu agendamento foi realizado com sucesso!", "sucesso");
form.reset();

  } catch (err) {
    console.error(err);
    showPopup("❌ Erro ao realizar agendamento. Tente novamente.", "erro");

  }
});*/






// agendamentos.js — Modelo Sequelize (Estrutura B completa)
// main.js do FRONT-END — responsável por enviar os dados para o backend

const API_BASE = "/api/agendamentos";

// Função de Pop-up estilizado
function showPopup(mensagem, tipo = "sucesso") {
  const popup = document.createElement("div");
  popup.className = `popup ${tipo}`;
  popup.textContent = mensagem;
  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("visivel"), 50);

  setTimeout(() => {
    popup.classList.remove("visivel");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

const form = document.querySelector(".form-servico");

// Enviar agendamento
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    cliente: form.cliente.value,
    telefone: form.telefone.value,
    servico: form.servico.value,
    profissional: form.profissional.value,
    data: form.data.value,
    hora: form.hora.value,
    observacoes: form.mensagem.value,
  };

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Erro");

    showPopup("✅ Seu agendamento foi realizado com sucesso!", "sucesso");
    form.reset();
  } catch (err) {
    console.error(err);
    showPopup("❌ Erro ao realizar agendamento. Tente novamente.", "erro");
  }
});







// agendamentos.js — Modelo Sequelize (Estrutura B completa e final)

import { DataTypes } from "sequelize";
import db from "./db.js";   // CORRETO

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
