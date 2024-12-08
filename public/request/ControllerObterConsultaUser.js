import { DELETE_CONSULTATION_ROUTE_USER, GET_ALL_CONSULTATIONS_USER_ROUTE } from "../routes/route.js";
import { listMarcar } from "../variavel/ControllerVar.js";
import { TokenDoCadastro } from "./ControllerCadastrar.js";
import { token } from "./ControllerFazerLogin.js";

export function obterConsultas(){

        function criarCardConsulta(consulta) {
            const card = document.createElement("div");
            card.classList.add("card");
        
            // Verifique se a consulta é um objeto ou está encapsulada em um array
            const dadosConsulta = Array.isArray(consulta) ? consulta[0] : consulta;
            //localStorage.setItem('ConsultaSearch',dadosConsulta)
            // Verifique se os dados da consulta estão presentes
            if (!dadosConsulta || Object.keys(dadosConsulta).length === 0) {
                console.error("Dados da consulta incompletos ou inválidos:", consulta);
                return null;
            }
        
        
            const nomePaciente = document.createElement("p");
            nomePaciente.textContent = "Nome do Paciente: " + dadosConsulta.nome;
        
            const especialidade = document.createElement("p");
            especialidade.textContent = "Especialidade: " + dadosConsulta.especialidade;
        
            // Certifique-se de que o campo 'data_da_consulta' seja acessado corretamente
            const dataConsulta = dadosConsulta.data_da_consulta ? new Date(dadosConsulta.data_da_consulta) : null;
            const data = document.createElement("p");
            data.textContent = "Data: " + (dataConsulta ? dataConsulta.toLocaleDateString() : "Data não disponível");

            const botaoCancelar = document.createElement("button");
            botaoCancelar.textContent = "Cancelar";
        
            const botaoBaixar = document.createElement("button");
            botaoBaixar.textContent = "Baixar em PDF";
        
            card.appendChild(nomePaciente);
            card.appendChild(especialidade);
            card.appendChild(data);
            card.appendChild(botaoCancelar);
            card.appendChild(botaoBaixar);
        
           // Armazenar o ID da consulta como um atributo de dataset no card
            card.dataset.idConsulta = consulta.id_consulta;

            return card;
        }
        
        function processarDadosConsultas(data) {
            if(data){

            let consultas = data.Consultas || [];
            const listaDeConsultas = document.querySelector(".lista_de_consulta .cards");
            listaDeConsultas.innerHTML = ""; // Limpar a lista antes de adicionar os novos cards
        
            // Verifica se o retorno é uma array, senão tenta converter
            if (!Array.isArray(consultas)) {
                // converter o objeto em uma array
                consultas = [consultas];
            }
        
            // Criar um card para cada consulta e adicioná-lo à lista
            consultas.forEach(consulta => {
                // Certifique-se de que os dados estão sendo acessados corretamente
                const nomePaciente = consulta.nome;
                const especialidade = consulta.especialidade;
                const dataConsulta = new Date(consulta.data_da_consulta);
                const idconsulta = consulta.id_consulta;

                // Verifique se os dados não estão vazios antes de criar o card
                if (nomePaciente && especialidade && !isNaN(dataConsulta.getTime())) {
                    const card = criarCardConsulta(consulta);
                    listaDeConsultas.appendChild(card);
                } else {
                    console.error("Dados da consulta incompletos ou inválidos:", consulta);
                }
            });
        
            // Marcar os cards recentes após a atualização da lista
            marcarCardsRecentes();
        
            // Adicionar evento de clique aos botões "Baixar em PDF" nos novos cards
            const botoesBaixarPDF = document.querySelectorAll('.card button:nth-child(5)');
            botoesBaixarPDF.forEach(botao => {
                botao.addEventListener('click', baixarPDF);
            });
        
            // Adicionar evento de clique aos botões "Cancelar" nos novos cards
            const botoesCancelar = document.querySelectorAll('.card button:nth-child(4)');
            botoesCancelar.forEach(botao => {
                botao.addEventListener('click', (event) => {
                    const card = event.target.closest('.card');
                    const idConsulta = card.dataset.idConsulta;
                    cancelarConsulta(idConsulta);
                });
            });            
          }
        }
        // Função para obter as consultas do usuário
        function obterConsultasDoUsuario() {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ? 'Bearer ' + token : (TokenDoCadastro ? 'Bearer ' + TokenDoCadastro : null)
                  }, 
                body: JSON.stringify({
                    accessToken: token || TokenDoCadastro || null
                })
            };
        
            fetch(GET_ALL_CONSULTATIONS_USER_ROUTE, requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } 
                    else if(response.status === 404) {
                        console.log("Not Found")
                    }
                })
                .then(data => {
                    console.log(data)
                    processarDadosConsultas(data);
                    inicializar(data.Consultas || [])
                })
        }
        
        function baixarPDF(event) {
            const card = event.target.closest('.card');
            const nomePaciente = card.querySelector('p:nth-child(1)').textContent.split(': ')[1];
            const especialidade = card.querySelector('p:nth-child(2)').textContent.split(': ')[1];
            const data = card.querySelector('p:nth-child(3)').textContent.split(': ')[1];
            
            const conteudoPDF = `
            <div style="display: flex; align-items: center; flex-direction: column; position: relative;">
                <div style="text-align: center; margin:3em;">
                    <img src="./assets/icons/logo.png" style="width:50%;">
                    <img src="./assets/icons/TubSaúde.svg" style="width:40%;">
                </div>
                <div style="text-align: center; margin-bottom: 20px;background: #34FDD9;padding: 1em 2em;width:100%;">
                    <h1 style="font-size: 2rem; color: #ffff; font-weight: bold;">Detalhes da Consulta</h1>
                </div>
                <div style="margin:3em; color: #343434; font-size: 1.4rem; letter-spacing: 2px;margin-left: -8em;">
                    <p><strong>Nome do Paciente:</strong> ${nomePaciente}</p>
                    <p><strong>Especialidade:</strong> ${especialidade}</p>
                    <p><strong>Data:</strong> ${data}</p>
                </div>
                <div style="color: #343434; font-size: .9rem; margin-top: 30em;display: flex; align-items: center;flex-direction: column;">
                   <p style="font-size: 1rem;">Muito Obrigado Pela Preferência</p>
                    <p>${new Date().toLocaleDateString()}</p>
                </div>
                <img src="./assets/icons/iconlogo.png" style="width:80%; margin-top: -40em;opacity: 30%;">
            </div>
        `;
        
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = conteudoPDF;
        
            html2pdf()
                .from(tempDiv)
                .save(`Consulta_${nomePaciente}.pdf`);
        }
        
        function cancelarConsulta(idConsulta) {
            console.log(idConsulta);
            const accessToken = token || TokenDoCadastro || null; // Obtendo o token de acesso do usuário
        
            if (!idConsulta || !accessToken) {
                console.error("ID da consulta ou token de acesso ausente.");
                return;
            }
        
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                },
                body: JSON.stringify({
                    accessToken: accessToken,
                    id_consulta: idConsulta
                })
            };
        
            fetch(DELETE_CONSULTATION_ROUTE_USER, requestOptions)
                .then(response => {
                    if (response.ok) {
                        const card = document.querySelector(`.card[data-id-consulta="${idConsulta}"]`);
                        if (card) card.remove(); 
                    } else {
                        // Algo deu errado
                        throw new Error('Erro ao cancelar consulta.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao cancelar consulta:', error.message);
                });
        }
        

        function marcarCardsRecentes() {
            const hoje = new Date();
            const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
        
            const cards = document.querySelectorAll(".lista_de_consulta .cards .card");
            cards.forEach(card => {
                const dataConsulta = new Date(card.querySelector("p:nth-child(3)").textContent.split(": ")[1]);
                if ((hoje - dataConsulta) < umDiaEmMilissegundos) {
                    const marca = document.createElement("span");
                    marca.classList.add("recente");
                    card.appendChild(marca);
                }
            });
        }
        
        // Função para filtrar as consultas com base no termo de pesquisa
        function filtrarConsultas(consultas, termoPesquisa) {
            return consultas.filter(consulta => {
                const nomePaciente = consulta.nome.toLowerCase();
                const especialidade = consulta.especialidade.toLowerCase();
                const data = consulta.data_da_consulta;
            
                return (
                    nomePaciente.includes(termoPesquisa.toLowerCase()) ||
                    especialidade.includes(termoPesquisa.toLowerCase()) ||
                    data.includes(termoPesquisa) // Pesquisa exata de data
                );
            });
        }        
        
        // Função para adicionar os cards filtrados à lista de consultas
        function adicionarCardsFiltrados(consultas, termoPesquisa) {
            const lista = document.querySelector(".lista_de_consulta .cards");
            lista.innerHTML = ""; // Limpa a lista antes de adicionar os cards filtrados
        
            // Filtra as consultas com base no termo de pesquisa
            const consultasFiltradas = filtrarConsultas(consultas, termoPesquisa);
            
            // Ordena as consultas filtradas por data, da mais recente para a mais antiga
            consultasFiltradas.sort((consultaA, consultaB) => new Date(consultaB.data_da_consulta) - new Date(consultaA.data_da_consulta));
            
            // Adiciona os cards das consultas filtradas à lista
            consultasFiltradas.forEach(consulta => {
                const card = criarCardConsulta(consulta);
                lista.appendChild(card);
            });
        
            // Marca os cards recentes na lista
            const botoesBaixarPDF = document.querySelectorAll('.card button:nth-child(5)');
            botoesBaixarPDF.forEach(botao => {
                botao.addEventListener('click', baixarPDF);
            });
        
            // Adicionar evento de clique aos botões "Cancelar" nos novos cards
            const botoesCancelar = document.querySelectorAll('.card button:nth-child(4)');
            botoesCancelar.forEach(botao => {
                botao.addEventListener('click', cancelarConsulta);
            });
            marcarCardsRecentes();

        }
        
            
        function inicializar(consultas) {
            // Obtenha as consultas do usuário e, em seguida, inicialize a página
        
            const inputPesquisar = document.getElementById('pesquisar');
            if (inputPesquisar) {
                inputPesquisar.addEventListener('input', () => {
                    const termoPesquisa = inputPesquisar.value.trim();
                    adicionarCardsFiltrados(consultas, termoPesquisa); 
                });
            }
        }
        

        if(listMarcar){
            listMarcar.addEventListener('click', function(){
                obterConsultasDoUsuario(); 
            })
        }

}
