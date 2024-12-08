import {enviarMensagem, listarDeContact, obterArquivo } from "../requestAdmin/ControllerChat.js";

// Elementos DOM
const SendAdmin = document.getElementById('SendAdmin');
//const newContactsCounter = document.getElementById('new-contacts-counter');
const chatLink = document.getElementById('chatLink');
const userList = document.getElementById('user-list');
const searchInput = document.getElementById('search-input');


var idConversa = 0

function sendMessage(IdUser, email) {
    idConversa = IdUser
    SendAdmin.addEventListener('click', function () {
        var messageInput = document.getElementById('message-input');
        var message = messageInput.value.trim(); // Remove espaços em branco no início e no final
        var chatBox = document.getElementById('chat-box');

        // Verifica se a mensagem não está vazia
        if (message !== '') {
            var messageElement = document.createElement('p');
            var messagecontainer = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add('user-message-right');

            messagecontainer.classList.add('message-container');

            messagecontainer.appendChild(messageElement);
            chatBox.appendChild(messagecontainer);
            // Envia a mensagem
            enviarMensagem(idConversa , message, email); 
        }
    });
}


// Função para exibir mensagens de outros usuários
export function OtherUser(name, sms) {
    var chatBox = document.getElementById('chat-box'); // Obtém a caixa de chat
    chatBox.innerHTML = ""; // Limpa o conteúdo atual do chat-box

    var initialCircle = document.createElement('div');
    initialCircle.classList.add('initial-circle-user');
    initialCircle.style.backgroundColor = getRandomColor();
    initialCircle.textContent = name.charAt(0).toUpperCase();

    // Cria um novo elemento de mensagem para exibir a mensagem do usuário
    var messageElement = document.createElement('p');
    messageElement.textContent = sms;
    messageElement.classList.add('user-message-right');

    // Cria um novo contêiner para a mensagem do usuário
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    messageContainer.appendChild(initialCircle);
    messageContainer.appendChild(messageElement);
    messageContainer.style.alignItems = 'flex-start';

    // Adiciona o contêiner da mensagem à caixa de chat
    chatBox.appendChild(messageContainer);
}

// Função para obter um arquivo
const Idobter = document.getElementById('Idobter')
if (Idobter) {
    Idobter.addEventListener('click', function () {
        obterArquivo()
    })
}

export function addUserToList(data) {
    userList.innerHTML = ""; // Limpa o conteúdo atual antes de adicionar os novos cards

    let Contactos = data.Contactos || [];
    if (!Array.isArray(Contactos)) {
        Contactos = [Contactos];
    }

    Contactos.forEach(function (Contacto) {
        // Criar um elemento de usuário para cada contato
        var userElement = document.createElement('div');
        userElement.classList.add('user');

        // Criar o círculo inicial com cor aleatória
        var initialCircle = document.createElement('div');
        initialCircle.classList.add('initial-circle');
        initialCircle.style.backgroundColor = getRandomColor();
        initialCircle.textContent = Contacto.email.charAt(0).toUpperCase();
        const datadocontato = new Date(Contacto.data_do_contato);

        // Formata a data no formato desejado "dd/mm/aaaa"
        const dataFormatada = `${datadocontato.getDate()}/${datadocontato.getMonth() + 1}/${datadocontato.getFullYear()}`;

        var userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `
                <p class="user-email">${Contacto.email}</p>
                <p class="user-description">${Contacto.mensagem}</p>
                <p class="user-date"><i class="fas fa-calendar-alt"></i> ${dataFormatada}</p>
            `;

        // Adiciona o círculo inicial e as informações do usuário ao elemento de usuário
        userElement.appendChild(initialCircle);
        userElement.appendChild(userInfo);


        // Define o evento de clique para cada usuário
        userInfo.style.cursor = "pointer";
        userInfo.addEventListener('click', function () {
            const IdUser = Contacto.id_contato;
            const email = Contacto.email;
            const conteudo = Contacto.mensagem;
            OtherUser(email, conteudo);
            sendMessage(IdUser, email);
        });

        // Adiciona o elemento de usuário à lista de usuários
        userList.appendChild(userElement);
        userElement.dataset.userId = Contacto.id_contato;
    });
}

// Ativa a lista de contatos
if (chatLink.classList.contains('ative')) {
    listarDeContact();
}

// Função para gerar cor aleatória
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Adiciona um event listener para a entrada de pesquisa
if (searchInput) {
    searchInput.addEventListener('input', function () {
        // Lógica para filtrar usuários com base na entrada de pesquisa
        var searchValue = searchInput.value.toLowerCase();
        var users = userList.getElementsByClassName('user');
        Array.from(users).forEach(function (user) {
            var userEmail = user.getElementsByClassName('user-email')[0].textContent.toLowerCase();
            var userDate = user.getElementsByClassName('user-date')[0].textContent.toLowerCase();
            if (userEmail.includes(searchValue) || userDate.includes(searchValue)) {
                user.style.display = 'flex';
            } else {
                user.style.display = 'none';
            }
        });
    });
}
