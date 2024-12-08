
import * as routes from '../routes/route.js';
import { CampoUser, pedirNovoCodigoBtn }from "../variavel/ControllerVar.js";

 // Função para validar os dados do formulário de registro
 function validarDadosRegistro() {
   
   let dadosValidos = true;
   let formData = {}; // Objeto para armazenar os dados do formulário
 
   for (const campo in CampoUser) {
     const valor = CampoUser[campo].value.trim();
     let isValid = true;
 
     // Verifica se o campo está vazio
     if (!valor) {
       isValid = false;
     }
 
     // Verifica outros critérios dependendo do campo
     switch (campo) {
       case 'email':
         isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
         break;
       case 'senha':
         isValid = valor.length >= 8 && valor.length <= 16; // Validação de tamanho da senha
         break;
       case 'confirmacaoSenha':
         // Verifica se a confirmação de senha é igual à senha
         const senha = CampoUser['senha'].value.trim();
         isValid = senha && senha === valor;
         break;
       case 'nomeUsuario':
         // Validação para nome: a primeira letra deve ser maiúscula
         isValid = /^[A-Z\u00C0-\u00FC][\w\u00C0-\u00FC]*$/u.test(valor);
         break;
       case 'nascimento':
         // Verifica se o usuário tem mais de 14 anos
         const hoje = new Date();
         const dataNascimento = new Date(valor);
         const diferencaEmMilissegundos = hoje - dataNascimento;
         const anosDeDiferenca = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365);
         isValid = anosDeDiferenca >= 14;
         break;
       default:
         break;
     }
 
     if (isValid) {
       // Se o campo for válido, define a borda para verde
       CampoUser[campo].style.border = "1px solid #02fccf";
       // Armazena o valor do campo no objeto formData
       formData[campo] = valor;
     } else {
       // Se o campo for inválido, define a borda para vermelha
       CampoUser[campo].style.border = "1px solid red";
       dadosValidos = false;
     }
   }
   return dadosValidos;
 }
 
 function obterDadosDoLocalStorage(){
     const formData = {
       name: $('#idNomeregister').val(),
       email: $('#idEmailregister').val(),
       password: $('#idSenharegister').val(),
       password_confirmation: $('#idConfSenha').val(),
       gender: $('#gender').val(),
       date_of_birth: $('#idDataNascimento').val(),
     };
     localStorage.setItem('registrationData', JSON.stringify(formData));
     return formData 
 }
 
 
 function receberCodigoVerificacao(formData) {
   // Configurações da requisição
   const requestOptions = {
     method: 'POST',
     headers: {
        'Content-Type':'Application/Json'
     },
     body: JSON.stringify({
       email: formData.email,
       })
   };
 
   // Faz a requisição para a rota /usuarios/verificar_email
   fetch(routes.USER_VERIFY_EMAIL_ROUTE, requestOptions)
       .then(response => {
         if (response.ok) {
           // Se a autenticação for bem-sucedida, retorna os dados de resposta 
           return response.json();
         } 
         else {
           throw new Error('Erro ao cadastrar usuário.');
         }
       }) 
    
 }
 

 function obterCodigoDigitado(){
   const CodigoDigitado = document.querySelectorAll('.Codigo-Digitado input[type="text"]');
   const valores = [];
   CodigoDigitado.forEach(input => {
     valores.push(input.value);
   });
   
   const codigoConfirmacao = valores.join('');
   ReceberCodigodeConfirmationDigitado(codigoConfirmacao);
 }
 
 
function ReceberCodigodeConfirmationDigitado(codigoConfirmacao){
    const codigoConfirmacaorecebido=codigoConfirmacao;
    Verification(codigoConfirmacaorecebido)
 }
 
 function Verification(codigoConfirmacaorecebido){
   const IsformData = obterDadosDoLocalStorage();
   const codigoEnviado = codigoConfirmacaorecebido;
   CadastrarUser(IsformData, codigoEnviado);
 }
 
 
 function CadastrarUser(IsformData,codigoEnviado){
   const requestOptions = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
 
     body: JSON.stringify({
       nome: IsformData.name,
       email: IsformData.email,
       senha: IsformData.password,
       genero: IsformData.gender,
       data_de_nascimento: IsformData.date_of_birth,
       codigo: codigoEnviado // Corrigido
     })
     
 
   };
 
   // Faz a requisição para a rota de cadastro de usuário na sua API
   fetch(routes.USER_REGISTER_ROUTE, requestOptions)
     .then(response => {
       if (response.ok) {
         // Se a autenticação for bem-sucedida, retorna os dados de resposta 
         return response.json();
       } 
       if(response.status === 403){
        mostrarModal()
       }
       else {
         const codigoEnviadoSpan = document.getElementById("codigoEnviado");
         codigoEnviadoSpan.textContent = "Código de confirmação inválido.";
         codigoEnviadoSpan.style.color = 'red';
         throw new Error('Erro ao cadastrar usuário.');
       }
     }) 
     .then(data => {
      handleCadastroSuccess()
       })
     .catch(error => {
       console.error('Erro ao cadastrar usuário:', error.message);
     });
 
 }
  // Função para mostrar o modal de alerta
      function mostrarModal() {
            var modal = document.getElementById("modalalert");
            document.getElementById('textalert').innerHTML="O email que cadastraste já está em uso!"
            modal.style.display = "block"; // Exibir o modal

            setTimeout(function() {
                document.getElementById('textalert').innerHTML="O tamanho do arquivo excede o limite máximo permitido (2MB)!"
                modal.style.display = "none";
                window.location.href="/"
            }, 7000);
      }
 export function handleCadastroSuccess() {
  AuthUserCadastrado()
}

function AuthUserCadastrado(){

const Dados=obterDadosDoLocalStorage()
const token = localStorage.getItem('token');

fetch(routes.USER_LOGIN_ROUTE,{
  method:'POST',
  headers:{
   'Content-Type':'Application/Json',
   'Authorization': 'Bearer' + token,
  },
  body:JSON.stringify({
    nome_de_usuario:Dados.name,
    senha:Dados.password
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
  AuthSucess(data)
})
.catch(error => {
  throw new Error('Erro ao autenticar:');
});
}

export function AuthSucess(data){
  const token = data.accessToken;
  localStorage.setItem('token', token);
  localStorage.setItem('IsUserCadastro', "IsUser");
  window.location.href="/"
}

 export function CadastrarUsuarios(){
  
  const createAccountBtn = document.getElementById('createAccountBtn');
   if (createAccountBtn) {
     createAccountBtn.addEventListener('click', function(event) {
 
       event.preventDefault(); // Evita o comportamento padrão do botão
     
       const dadosValidos = validarDadosRegistro();
     
       if (dadosValidos) {
     
         const confirmCodeModal = document.getElementById('confirmCodeModal');
         confirmCodeModal.style.display = "block";
     
         const registerFormModal = document.getElementById('registerFormModal');
         registerFormModal.style.display = "none";
     
         const formData = obterDadosDoLocalStorage();
         receberCodigoVerificacao(formData);
     
        }
     });
   }
 
   const confirmarcodigo = document.getElementById('confirmarcodigo');
   if(confirmarcodigo ){
     confirmarcodigo.addEventListener("click", function(event) {
       event.preventDefault(); // Evita o comportamento padrão do botão
     // const isValido = valido(); // Invocar a função e passar o valor para validar
       obterCodigoDigitado()
   });
   }

 }

 if(pedirNovoCodigoBtn){
   pedirNovoCodigoBtn.addEventListener('click', function(event) {

   event.preventDefault();

   const formData = obterDadosDoLocalStorage();
   receberCodigoVerificacao(formData);

});
}

 export function limparCamposFormulario() {
  // Limpar os campos do formulário
  $('#idNomeregister').val("")
  $('#idEmailregister').val("")
  $('#idSenharegister').val("")
  $('#idConfSenha').val("")
  $('#gender').val("")
  $('#idDataNascimento').val("")
  for (const campo in CampoUser) {
  CampoUser[campo].style.border = "1px solid #646464";
 }
}
 // Função para armazenar dados no LocalStorage
export function salvarDadosLocalStorage(formData) {
    localStorage.setItem(formData);
}
export function LimparTokenEIsUser(){
localStorage.removeItem("TokenDoCadastro");
localStorage.removeItem("IsUserCadastro")
}
export const TokenDoCadastro=localStorage.getItem('token');
export const IsUserCadastro=localStorage.getItem('IsUserCadastro');