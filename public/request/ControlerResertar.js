import { closeModal } from "../js/eventHandlers.js";
import { USER_CHANGE_PASSWORD_ROUTE, USER_LOGIN_ROUTE, USER_RECEIVE_RESET_CODE_ROUTE } from "../routes/route.js";
import { EnterBtnResert, NewSenha, NewSenhaConf, confirmCodeModalSenha, confirmarcodigoSenha, emailResert, forgotPasswordModal, idNomeResert, idSenhaResert, insertNewPasswordModal, nextToConfirmCodeBtn, nextToInsertEmailBtn, pedirNovoCodigoBtnSenha, registerModal, registerModalResert } from "../variavel/ControllerVar.js";

export function Resertar() {

    function CodigoDeConf(email) {

        fetch(USER_RECEIVE_RESET_CODE_ROUTE, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })

        })
        .then(response => {
            if (response.ok) {

                return response.json();

            } else {
                throw new Error(`Erro ao autenticar: ${response.statusText}`);
            }
        })
        .then(data => {

            localStorage.setItem('Email', email);

            closeModal();

            insertNewPasswordModal.style.display = "block";

            console.log(data);

        })
        .catch(error => {
            emailResert.style.border = "1px solid red";
            console.error('Por favor, insira um e-mail válido.');
            throw new Error('Erro ao autenticar:');
        });
    }

    function NovoCodigoDeConf(email) {

        fetch(USER_RECEIVE_RESET_CODE_ROUTE, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })

        })
        .then(response => {
            if (response.ok) {

                return response.json();

            } else {
                throw new Error(`Erro ao autenticar: ${response.statusText}`);
            }
        })
        .then(data => {

            console.log(data);

        })
        .catch(error => {
            emailResert.style.border = "1px solid red";
            console.error('Por favor, insira um e-mail válido.');
            throw new Error('Erro ao autenticar:');
        });
    }

    function obterCodigoDigitado(email,senha) {

        const CodigoDigitado = document.querySelectorAll('.Codigo-Digitados input[type="text"]');
        const valores = [];
        CodigoDigitado.forEach(input => {
            valores.push(input.value);
        });
        const codigoConfirmacao = valores.join('');
        ReceberCodigodeConfirmationDigitado(codigoConfirmacao, email,senha);

    }

    function ReceberCodigodeConfirmationDigitado(codigoConfirmacao,email,senha) {

        const codigo = codigoConfirmacao;
        addInsertEmailHandler(codigo,email,senha);

    }

    function addInsertEmailHandler(codigo,email,senha) {

        const Dados = {
            email: email,
            codigo: codigo,
            nova_senha:senha
        };

        localStorage.setItem('DadosSenha',JSON.stringify(Dados));
        AlterarSenha(Dados);

    }

    function AlterarSenha(Dados) {

        const requestOptions={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Dados)
        }

     fetch(USER_CHANGE_PASSWORD_ROUTE,requestOptions)
        .then(response => {
            if (response.ok) {

                localStorage.removeItem('DadosSenha');
                console.log('Senha alterada com sucesso!');
                AuthUserResert()

            }
             else {
                throw new Error(`Erro ao autenticar: ${response.statusText}`);
            }
        })
        .catch(error => {

            const codigoEnviadoSpan = document.getElementById("codigoEnviadoSenha");
            codigoEnviadoSpan.textContent = "Código de confirmação inválido.";
            codigoEnviadoSpan.style.color = 'red';
            throw new Error('Erro ao autenticar:');

        });
    }

    if (nextToInsertEmailBtn) {

        nextToInsertEmailBtn.addEventListener('click', function(event) {

            event.preventDefault();
     
            
            const email = emailResert.value.trim(); // Remove espaços em branco do início e do fim
            localStorage.setItem('emailUser',email)
            if (!email) {
                emailResert.style.border = "1px solid red";
                console.error('Por favor, insira seu endereço de e-mail.');
                return;
            }
            if (!isValidEmail(email)) {
                emailResert.style.border = "1px solid red";
                console.error('Por favor, insira um e-mail válido.');
                return;
            }
            else{

                CodigoDeConf(email);

            }

        });
    }
    
    // Função para verificar se o formato de e-mail é válido
    function isValidEmail(email) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

    }
    
    function ConfirmarCodigoVerification(email,senha){

        if (confirmarcodigoSenha) {

            confirmarcodigoSenha.addEventListener('click', function(event) {
                
                event.preventDefault();

                obterCodigoDigitado(email,senha);

            });
        }

            
    }

    if (nextToConfirmCodeBtn) {

        nextToConfirmCodeBtn.addEventListener('click', function(event) {

            event.preventDefault();

            const senha = NewSenhaConf.value;
            const Nova_Senha=NewSenha.value 

            if (Nova_Senha.length < 8 || senha.length > 16) {

                NewSenha.style.border = "1px solid red";
                console.error('A senha deve conter entre 8 e 16 caracteres.');

                return;
            }
            if (Nova_Senha !== senha) {

                NewSenha.style.border = "1px solid red";
                NewSenhaConf.style.border = "1px solid red";
                console.error('As senhas não coincidem.');

                return;
            }
            else{

                closeModal();

                confirmCodeModalSenha.style.display = "block";
                forgotPasswordModal.style.display = "none";
                insertNewPasswordModal.style.display = "none";

                const email = localStorage.getItem('Email');

                ConfirmarCodigoVerification(email,senha)

            }

        });
    }

    if(pedirNovoCodigoBtnSenha){
        pedirNovoCodigoBtnSenha.addEventListener('click', function(event) {

       event.preventDefault();
        const email= localStorage.getItem('emailUser')
        NovoCodigoDeConf(email);

     });
    }

    function AuthUserResert(){
    
        confirmCodeModalSenha.style.display = "none";
        forgotPasswordModal.style.display = "none";
        insertNewPasswordModal.style.display = "none";
        registerModalResert.style.display = "block";

        if(EnterBtnResert){
            EnterBtnResert.addEventListener('click', function(event) {
            event.preventDefault();
            const DadosAuth={
                nome_de_usuario:idNomeResert.value,
                senha:idSenhaResert.value
            }
            AuthUserCadastrado(DadosAuth)

            });
        }

    }

    function AuthUserCadastrado(DadosAuth){

        const token = localStorage.getItem('token');
        
        fetch(USER_LOGIN_ROUTE,{
          method:'POST',
          headers:{
           'Content-Type':'Application/Json',
           'Authorization': 'Bearer' + token,
          },
          body:JSON.stringify(DadosAuth)
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Erro ao autenticar: ${response.statusText}`);
          }
        })
        .then(data => {
          AuthSucess(data)
        })
        .catch(error => {
            idNomeResert.style.border = "1px solid red";
            idSenhaResert.style.border = "1px solid red";
            throw new Error('Erro ao autenticar:');
        });
        }
        
    function AuthSucess(data){
        const token = data.accessToken;
        localStorage.setItem('token', token);
        localStorage.setItem('IsUserResert', "IsUser");
        window.location.href="/"
    }
    
}
    export function LimparDadosResert(){
        localStorage.removeItem('token');
        localStorage.removeItem('IsUserResert');
    }

export const TokenResertSenha=localStorage.getItem('token');
export const IsUserResertSenha=localStorage.getItem('IsUserResert');