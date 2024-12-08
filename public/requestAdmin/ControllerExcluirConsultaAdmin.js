import { DELETE_CONSULTATION_ROUTE_ADMIN } from "../routes/route.js";
import { verificarToken } from "./ControllerObterConsultasAdmin.js";

// Função para excluir uma consulta
export function excluirConsulta(IdConsulta) {
    verificarToken()

    .then((currentToken) => {
        console.log(currentToken)
        console.log(IdConsulta)
        fetch(DELETE_CONSULTATION_ROUTE_ADMIN,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentToken
                },
                body: JSON.stringify({
                     accessToken: currentToken ,
                     id_consulta: IdConsulta
                })
            })
            .then(response => {
                console.log('Status da solicitação ao excluir consulta:', response.status);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erro ao excluir consulta. Status: ' + response.status);
                }
            })
            .then(data => {
                console.log('Consulta excluída com sucesso!', data);
                   // Atualize a interface removendo o card da consulta excluída
            const cardConsultaExcluida = $(`.card-consulta[data-id="${IdConsulta}"]`);
            cardConsultaExcluida.remove();
            })
            .catch(error => {
                console.error('Erro ao excluir consulta:', error);
            });
    })
    .catch(error => {
        console.error('Erro ao excluir consulta:', error);
    });

}