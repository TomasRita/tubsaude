import { addUserToList } from "../admin_js/chat.js";
import { token } from "../request/ControllerFazerLogin.js";
import { DELETE_CONTACT_ROUTE, DELETE_FILE_ROUTE, GET_CONTACT_RESPOND_ROUTE, GET_FILE_ROUTE, LIST_ALL_CONTACTS_ROUTE, SEND_FILE_MESSAGE_ROUTE } from "../routes/route.js";

    function verificarToken() {

        return new Promise((resolve, reject) => {
            const currentToken = token;
            resolve(currentToken);
        });
        
    }
   // Função para enviar uma mensagem
    export function enviarMensagem(idConversa, conteudo, email) {
        verificarToken()
        .then((currentToken) => {
            fetch(GET_CONTACT_RESPOND_ROUTE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentToken
                },
                body: JSON.stringify({
                    accessToken: currentToken,
                    email: email,
                    conteudo: conteudo
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Mensagem enviada com sucesso!');
                    eliminarContato(idConversa,currentToken)
                    // Após enviar a mensagem com sucesso, chame a função para eliminar o contato
                } else {
                    throw new Error('Erro ao enviar mensagem. Status: ' + response.status);
                }
            })
            .catch(error => {
                console.error('Erro ao enviar mensagem:', error);
            });
        })
        .catch(error => {
            console.error('Erro ao obter token:', error);
        });
    }

    // Função para eliminar um contato
    export function eliminarContato(idContato,accessToken) {
    
    fetch(`${DELETE_CONTACT_ROUTE}${idContato}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            accessToken: accessToken,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao eliminar contato');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.mensagem); // Exibe a mensaem de sucesso
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}


    export function listarDeContact() {

        fetch(LIST_ALL_CONTACTS_ROUTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                accessToken: token,
            })
        })
        .then(response => {
            if (response.ok) {
               return response.json();
            }
           else if(response.status === 404){
                console.log("Sem contacto!")
            } 
            else {
                throw new Error('Erro ao listar pessoas. Status: ' + response.status);
            }
        })
        .then(data => {
            console.log('listar pessoas:', data);
            const dados = data
            addUserToList(data) 
        })
        .catch(error => {
            console.error('Erro ao listar:', error);
        });

    }  
    
      /*
    // Função para editar uma mensagem
    export function editarMensagem(accessToken, idMensagem, novoConteudo) {
        fetch(EDIT_MESSAGE_ROUTE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                accessToken: accessToken,
                id_mensagem: idMensagem,
                novoConteudo: novoConteudo
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Mensagem editada com sucesso!');
            } else {
                throw new Error('Erro ao editar mensagem. Status: ' + response.status);
            }
        })
        .catch(error => {
            console.error('Erro ao editar mensagem:', error);
        });
    }*/

    // Função para enviar uma mensagem de arquivo
    export function enviarMensagemArquivo(accessToken, idConversa, arquivo) {
        const formData = new FormData();
        formData.append('accessToken', accessToken);
        formData.append('id_conversa', idConversa);
        formData.append('arquivo', arquivo);

        fetch(SEND_FILE_MESSAGE_ROUTE, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log('Mensagem de arquivo enviada com sucesso!');
            } else {
                throw new Error('Erro ao enviar mensagem de arquivo. Status: ' + response.status);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar mensagem de arquivo:', error);
        });
    }

    //Função para obterArquivo
    export function obterArquivo(accessToken, nomeDoArquivo) {
        fetch(GET_FILE_ROUTE`${nomeDoArquivo}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                accessToken: accessToken
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Arquivo obtido com sucesso!');
                // Aqui você pode fazer algo com o arquivo obtido, como baixá-lo ou exibi-lo
            } else {
                throw new Error('Erro ao obter arquivo. Status: ' + response.status);
            }
        })
        .catch(error => {
            console.error('Erro ao obter arquivo:', error);
        });
    }
    // Função para eliminar um arquivo
    export function eliminarArquivo(accessToken, nomeDoArquivo) {
        fetch(DELETE_FILE_ROUTE`${nomeDoArquivo}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                accessToken: accessToken
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Arquivo eliminado com sucesso!');
            } else {
                throw new Error('Erro ao eliminar arquivo. Status: ' + response.status);
            }
        })
        .catch(error => {
            console.error('Erro ao eliminar arquivo:', error);
        });
    }