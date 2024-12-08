import {consultasobtidas } from "./dashboard.js";

// Função para preencher a tabela com os dados das consultas
function preencherTabelaConsultas(consultas) {
    const tableBody = document.getElementById("tableBody");
    // Limpa o conteúdo atual da tabela
     tableBody.innerHTML = ""; 

    consultas.forEach(function(consulta, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${consulta.nome}</td>
            <td>${consulta.especialidade}</td>
            <td>${consulta.data}</td>
        `;
        tableBody.appendChild(row);

        // Inicia a contagem regressiva apenas se a data e hora atual corresponderem à data e hora da marcação
       /* const targetTime = new Date(consulta.data + " " + consulta.hora).getTime();
        <td>${consulta.hora}</td> <!-- Adiciona a hora da consulta -->
        <td id="countdown${index + 1}" class="countdown"></td>
        if (targetTime <= new Date().getTime()) {
            row.style.display = "none";
        } else {
            setTimeout(() => countdown("countdown" + (index + 1), consulta.data + " " + consulta.hora, row), targetTime - new Date().getTime());
        }*/
    });
}

// Função para gerar os cards das consultas com base nos dados retornados
function gerarConsultas() {
    if (consultasobtidas !== null) {
        let consultas = consultasobtidas || [];
        
        // Verifica se o retorno é uma array, senão tenta converter
        if (!Array.isArray(consultas)) {
            // Tenta converter o objeto em uma array
            consultas = [consultas];
        }
    
        // Chama a função para preencher a tabela com os dados das consultas
        preencherTabelaConsultas(consultas);
    }
   
}
const PendenteLink=document.getElementById('PendenteLink')
if(PendenteLink){
gerarConsultas() 
}