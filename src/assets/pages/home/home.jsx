import React, { useState } from "react";
import "./home.css";
import Header from "../../components/header/header";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    numeroCasa: "",
    complemento: "",
    cep: "",
    cel: "",
  });
  function copyToClipboard(text) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  function envio(e) {
    e.preventDefault();
    const lines = texto.split("\n");
    const nome = lines[0];
    const cpf = lines[1];
    const endereco = lines[2];
    const lugar = lines[3];
    const cel = lines[5].replace(/[\s-]/g, "");
    const [numeroCasa, complemento] = extrairNumeroComplemento(endereco);
    const cep = extrairCep(lugar);

    setCliente({
      nome,
      cpf,
      numeroCasa,
      complemento,
      cep,
      cel,
    });
  }

  function extrairNumeroComplemento(endereco) {
    const matches = endereco.match(/(\d+)\s*-\s*(.*?)(?:\s*-\s*.*$|$)/);
    if (matches && matches.length === 3) {
      const numeroCasa = matches[1];
      const complemento = matches[2];
      return [numeroCasa, complemento];
    }
    return ["", ""];
  }

  function extrairCep(lugar) {
    const cepMatch = lugar.match(/\d{5}-\d{3}/);
    return cepMatch ? cepMatch[0] : "";
  }

  return (
    <>
      <Header />
      <main>
        <form className="container">
          <h2>Cole Todos os dados do cliente abaixo:</h2>
          <textarea
            className="info"
            cols="60"
            rows="12"
            id="info"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          ></textarea>
          <button className="btnFormat" onClick={envio}>
            Enviar
          </button>
        </form>
        <div className="cliente-info">
          <h3>Informações do Cliente:</h3>
          <p className="alinhador">
            <span>Nome: </span>
            <button
              className="copiar"
              onClick={() => {
                copyToClipboard(cliente.nome);
                return false;
              }}
            >
              {cliente.nome}
            </button>
          </p>
          <p className="alinhador">
            <span>CPF: </span>
            <button
              className="copiar"
              onClick={() => {
                copyToClipboard(cliente.cpf);
                return false;
              }}
            >
              {cliente.cpf}
            </button>
          </p>

          <p className="alinhador">
            <span>Número da Casa: </span>
            <button
              className="copiar"
              onClick={() => {
                copyToClipboard(cliente.numeroCasa);
                return false;
              }}
            >
              {cliente.numeroCasa}
            </button>
          </p>
          <p className="alinhador">
            <span>Complemento: </span>
            <button
              className="copiar"
              onClick={() => {
                copyToClipboard(cliente.complemento);
                return false;
              }}
            >
              {cliente.complemento}
            </button>
          </p>
          <p className="alinhador">
            <span>CEP: </span>{" "}
            <button
              className="copiar"
              onClick={() => {
                copyToClipboard(cliente.cep);
                return false;
              }}
            >
              {cliente.cep}
            </button>
          </p>
          <p className="alinhador">
            <span>Telefone: </span>
            <button
              className="copiar"
              onClick={() => {
                copyToClipboard(cliente.cel);
                return false;
              }}
            >
              {cliente.cel}
            </button>
          </p>
        </div>
      </main>
    </>
  );
}
