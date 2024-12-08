import { USER_EDIT_ROUTE, USER_GET_BY_ACCESS_TOKEN_ROUTE } from "../routes/route.js";
import { Definition, createbtnmydados, createbtnmydadosDefinition, mydados, mydadosButton } from "../variavel/ControllerVar.js";
import { TokenDoCadastro } from "./ControllerCadastrar.js";
import { token } from "./ControllerFazerLogin.js";

export function ControllerEditUser() {

    const accessToken = TokenDoCadastro || token;

    // Função para preencher os inputs com os dados do usuário
    function preencherInputsUsuario(data) {
        if (data && data.usuario) {
            const dadosUsuario = data.usuario;
            document.querySelector('.profile_meus_dados input[type="text"]').value = dadosUsuario.nome_de_usuario;
            document.querySelector('.profile_meus_dados input[type="email"]').value = dadosUsuario.email;
            document.getElementById('genderprofile').value = dadosUsuario.genero;

            // Formatando a data de nascimento no formato YYYY-MM-DD
            const dataNascimento = new Date(dadosUsuario.data_de_nascimento);
            const dataFormatada = dataNascimento.toISOString().split('T')[0];
            document.getElementById('birthdate').value = dataFormatada;
        } else {
            console.error("Dados do usuário incompletos ou inválidos:", data);
        }
    }

    // Função para atualizar o perfil do usuário
    async function atualizarPerfilUsuario() {
        const nomeUsuario = document.querySelector('#registerFormprofile input[type="text"]').value;
        const genero = document.getElementById('genderprofile').value;
        const dataNascimento = document.getElementById('birthdate').value;

        const requestBody = {
            accessToken: accessToken,
            nome: nomeUsuario,
            genero: genero,
            data_de_nascimento: dataNascimento
        };

        try {
            const response = await fetch(USER_EDIT_ROUTE, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken 
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.mensagem); // Exibe a mensagem de sucesso no console
                simulateRequest() 
            } else {
                console.error('Erro ao atualizar dados pessoais:', response.status);
                // Exibir mensagem de erro na tela se necessário
            }
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            // Exibir mensagem de erro na tela se necessário
        }
    }

    // Função para atualizar as configurações do usuário
    async function atualizarConfiguracoes() {
        const email = document.querySelector('#DefinitionForm input[type="email"]').value;
        const senha = document.querySelector('#DefinitionForm input[type="password"]').value;
        const confirmacaoSenha = document.querySelectorAll('#DefinitionForm input[type="password"]')[1].value;

        // Verificar se as senhas coincidem
        if (senha !== confirmacaoSenha) {
            console.error('As senhas não coincidem');
            // Exibir mensagem de erro na tela se necessário
            return;
        }

        // Se o email foi fornecido, exibir modal para inserir código de verificação
        if (email) {
            const modal = document.getElementById('codigoModal');
            modal.style.display = 'block';
    
            const confirmarBtn = document.getElementById('confirmarCodigoBtn');
            confirmarBtn.onclick = async () => {
                const codigo1 = document.getElementById('codigoVerificacaoInput1').value;
                const codigo2 = document.getElementById('codigoVerificacaoInput2').value;
                const codigo3 = document.getElementById('codigoVerificacaoInput3').value;
                const codigo = codigo1 + codigo2 + codigo3;
                modal.style.display = 'none';
    
                // Enviar o código de verificação e o novo email para o servidor
                const requestBody = {
                    accessToken: accessToken,
                    email: email,
                    codigo: codigo
                };
    
                try {
                    const response = await fetch(USER_EDIT_ROUTE, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + accessToken 
                        },
                        body: JSON.stringify(requestBody)
                    });
    
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data.mensagem); // Exibe a mensagem de sucesso no console
                        // Aqui você pode realizar outras ações, como exibir uma mensagem na tela
                    } else {
                        console.error('Erro ao atualizar o email:', response.status);
                        // Exibir mensagem de erro na tela se necessário
                    }
                } catch (error) {
                    console.error('Erro ao fazer requisição:', error);
                    // Exibir mensagem de erro na tela se necessário
                }
            };
        }
    }
if( mydados || Definition){
    // Fetch para obter os dados do usuário
    fetch(USER_GET_BY_ACCESS_TOKEN_ROUTE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken 
        },
        body: JSON.stringify({ accessToken: accessToken })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Falha ao recuperar os dados do usuário.');
        }
    })
    .then(data => {
        preencherInputsUsuario(data);
    })
    .catch(error => {
        console.error('Erro ao recuperar os dados do usuário:', error);
    });
}
    // Event listeners para os botões de atualizar perfil e configurações
    if(mydados){
        if (createbtnmydados) {
            createbtnmydados.addEventListener('click', () => {
                atualizarPerfilUsuario();
            });
        }
    }
   
    if(Definition){
        if (createbtnmydadosDefinition) {
            createbtnmydadosDefinition.addEventListener('click', () => {
                atualizarConfiguracoes();
            });
        }
    }
  
    function simulateRequest() {
        createbtnmydados.classList.add('loading');
        createbtnmydados.style.cursor="default";
        createbtnmydados.style.background="#6464645b";
        setTimeout(() => {
            createbtnmydados.style.cursor="pointer";
            createbtnmydados.style.background="#646464";
            createbtnmydados.classList.remove('loading');
        }, 3000);
    }
}
