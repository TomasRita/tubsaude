import { CamposConsulta, ConsultaBtn } from "../variavel/ControllerVar.js";
import {  MARK_CONSULTATION_ROUTE_USER } from "../routes/route.js";
import { token } from "./ControllerFazerLogin.js";
import { TokenDoCadastro } from "./ControllerCadastrar.js";

function validarDados() {
  let dadosValidos = true;
  let formData = {}; // Objeto para armazenar os dados do formulário

  for (const campo in CamposConsulta) {
      const valor = CamposConsulta[campo].value.trim();
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
          case 'number':
              isValid = valor.length >= 0 && valor.length <= 9; // Validação de tamanho da senha
              break;
          case 'nomeUsuario':
              // Validação para nome: permite espaços e a primeira letra de cada palavra deve ser maiúscula
              isValid = /^[A-Z\u00C0-\u00FC][a-z\u00C0-\u00FC]*( [A-Z\u00C0-\u00FC][a-z\u00C0-\u00FC]*)*$/.test(valor);
              break;
              case 'data':
                // Verifica se a data da consulta é posterior ou igual à data atual
                const hoje = new Date();
                const data = new Date(valor);

                // Verifica se a data da consulta é igual ou posterior à data atual
                isValid = data >= hoje;
                break;            
            
          default:
              break;
      }

      if (isValid) {
          // Se o campo for válido, define a borda para verde
          CamposConsulta[campo].style.border = "1px solid #02fccf";
          // Armazena o valor do campo no objeto formData
          formData[campo] = valor;
      } else {
          // Se o campo for inválido, define a borda para vermelha
          CamposConsulta[campo].style.border = "1px solid red";
          dadosValidos = false;
      }
  }
  return dadosValidos;
}


function CadastrarConsulta(formData){

    const requestOptions={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? 'Bearer ' + token : (TokenDoCadastro ? 'Bearer ' + TokenDoCadastro : null)
    }, 
    body:JSON.stringify(
      {
        especialidade:formData.especialidade,
        data_da_consulta:formData.data_da_consulta,
        email:formData.email,
        nome:formData.nome,
        numero:formData.number,
        accessToken: token || TokenDoCadastro || null
      }
    )
    };

    fetch(MARK_CONSULTATION_ROUTE_USER, requestOptions)

    .then(response =>{
        if (response.ok) {
            // Se a autenticação for bem-sucedida, retorna os dados de resposta 
            return response.json();
          } 
          else {
            throw new Error('Erro ao cadastrar Consulta.');
          }
    })
    .then(data => {
      exibirModalSucesso()
      LimparCamposContact()
     // console.log(data)
     })
    .catch(error => {
      console.error('Erro ao cadastrar Consulta:', error.message);
    });
}
  
export function CadastrarConsultas(){
  if(ConsultaBtn){
    ConsultaBtn.addEventListener('click', function(event) {

      event.preventDefault(); // Evita o comportamento padrão do botão
    
      const dadosValidos = validarDados();
    
      if (dadosValidos) {
          const formData = {
              number: $('#MarcarUserNumber').val(),
              especialidade: $('#selectEspecialidade').val(),
              data_da_consulta: $('#birthdate').val(),
              nome: $('#MacarUsername').val(),
              email: $('#MarcarUserEmail').val(),
            };
          CadastrarConsulta(formData)
       }
    
    });
  }

}
export function LimparCamposContact(){

   $('#MarcarUserNumber').val("")
   $('#selectEspecialidade').val("")
   $('#birthdate').val("")
   $('#MacarUsername').val("")
   $('#MarcarUserEmail').val("")
   for (const campo in CamposConsulta) {
    CamposConsulta[campo].style.border = "1px solid #646464";
   }
}

function exibirModalSucesso() {
  const modalSucesso = document.getElementById('modalSucesso');
  modalSucesso.style.display = "flex";
  // Definir temporizador para fechar o modal após 3 segundos
  setTimeout(() => {
    modalSucesso.style.display = "none";
  },8000);
}

  