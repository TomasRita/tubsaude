import { gerarCardsConsultas } from "../admin_js/dashboard.js";
import { token } from "../request/ControllerFazerLogin.js";
import { GET_ALL_CONSULTATIONS_ADMIN_ROUTE } from "../routes/route.js";


    // Função para verificar se o token de acesso está válido
   export function verificarToken() {
        return new Promise((resolve, reject) => {
            const currentToken = token;
            resolve(currentToken);
        });
    }

    export function obterConsultasAdministrador() {
        verificarToken()
            .then((currentToken) => {
                fetch(GET_ALL_CONSULTATIONS_ADMIN_ROUTE, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + currentToken
                        },
                        body: JSON.stringify({ accessToken: currentToken })
                    })
                    .then(response => {
                        console.log('Status da solicitação ao obter Consulta:', response.status);
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Erro ao obter Consulta. Status: ' + response.status);
                        }
                    })
                    .then(data => {
                        const DadosConsulta = data;
                        gerarCardsConsultas(DadosConsulta);
                    })
                    .catch(error => {
                        console.error('Erro ao obter Consulta:', error);
                    });
            })
            .catch(error => {
                console.error('Erro ao verificar o token de acesso:', error);
            });
    }
  
    