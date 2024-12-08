import { sendMensager } from "../variavel/ControllerVar.js";
import { CREATE_CONTACT_ROUTE } from "../routes/route.js";

export function Contact(){
  if(sendMensager){
    sendMensager .addEventListener("click", function(event) {
      event.preventDefault(); // Evita o comportamento padrão do botão
      send(); // Chama a função logar ao clicar no botão "Entrar"
    });
  }
}
 function DadosContact(){
  const Dados = {
    email: $('#Send_Email_Contact').val(),
    mensagem: $('#id_sms').val(),
  }
  return Dados
 }
  function send() 
{
      const Form_Dados=DadosContact()
      Send_sms_Contact(Form_Dados)
    
}

function Send_sms_Contact(Form_Dados){
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Form_Dados)
      };

    // Faz a requisição para a rota de cadastro de usuário na sua API
    fetch(CREATE_CONTACT_ROUTE, requestOptions)
      .then(response => {
        if (response.ok) {
          // Se a autenticação for bem-sucedida, retorna os dados de resposta 
          return response.json();
        } 
        else {
          throw new Error('Erro ao Enviar mensagem.');
        }
      }) 
      .then(data => {
         exibirModalSucesso()
         LimparCamposContact()
         console.log("Retornar a resposta", data)
        })
      .catch(error => {
        console.error('Erro ao Enviar mensagem:', error.message);
      });
}
export function LimparCamposContact(){
  // Limpa os campos do formulário
  $('#Send_Email_Contact').val("");
  $('#id_sms').val("");
}

function exibirModalSucesso() {
  const modalSucesso = document.getElementById('modalSucesso');
  modalSucesso.style.display = "flex";
  // Definir temporizador para fechar o modal após 3 segundos
  setTimeout(() => {
    modalSucesso.style.display = "none";
  },8000);
}