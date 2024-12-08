import { token } from "../request/ControllerFazerLogin.js";
import { GET_ALL_NOTIFICATIONS_ROUTE } from "../routes/route.js";


document.addEventListener('DOMContentLoaded', function() {
    function addUserToList(id_notificacao, conteudo, data_da_notificacao) {
        var userList = document.getElementById('user-list-not');
        var userElement = document.createElement('div');
        userElement.classList.add('user-not');

        // Criar o círculo inicial com cor aleatória
        var initialCircle = document.createElement('div');
        initialCircle.classList.add('initial-circle');
        initialCircle.style.backgroundColor = getRandomColor();

        initialCircle.textContent = conteudo.charAt(2).toUpperCase();
        
        var userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `
            <p class="user-description">${conteudo}</p>
            <p class="user-date"><i class="fas fa-calendar-alt"></i> ${data_da_notificacao}</p>
        `;

        userElement.appendChild(initialCircle);
        userElement.appendChild(userInfo);
        userList.appendChild(userElement);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var notificationsLink = document.getElementById('notificationsLink');
    if (notificationsLink.classList.contains('ative')) {
        // Aqui enviamos a solicitação para obter as notificações
        fetch(GET_ALL_NOTIFICATIONS_ROUTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accessToken: token // Substitua "seu_token_aqui" pelo seu token de acesso real
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else{
                throw new Error('Erro ao obter notificações. Status: ' + response.status);
            }
        })
        .then(data => {
            console.log(data)
            // Verifica se os dados são um objeto e não uma array
            if (data && data.Notificacoes && Array.isArray(data.Notificacoes)) {
                // Itera sobre a array de notificações
                data.Notificacoes.forEach(notification => {
                    addUserToList(notification.id_notificacao, notification.conteudo, notification.data_da_notificacao);
                });
            } else {
                throw new Error('Dados de notificação inválidos.');
            }
        })
        .catch(error => {
            console.error('Erro ao obter notificações:', error);
        });
    }
});

