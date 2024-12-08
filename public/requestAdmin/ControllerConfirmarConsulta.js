import { token } from "../request/ControllerFazerLogin.js";
import { CONFIRM_CONSULTATION_ROUTE_ADMIN } from "../routes/route.js";
import { excluirConsulta } from "./ControllerExcluirConsultaAdmin.js";

  // Função para confirmar uma consulta
 export function confirmarConsulta(IdConsulta, horaConsulta) {

    const requestData = {
        accessToken: token,
        id_consulta: IdConsulta,
        hora_da_consulta: horaConsulta
    };

    fetch(CONFIRM_CONSULTATION_ROUTE_ADMIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Erro ao confirmar consulta');
            }
        })
        .then(data => {
            const mensagem = data.mensagem;
            // Após a confirmação bem-sucedida, chame a função para excluir a consulta
            excluirConsulta(IdConsulta,mensagem);
        })
        .catch(error => {
            
            console.error('Erro ao confirmar consulta:', error);
        });
}