// controllerEcluirUser.js

// Importa a função ExcluirLocalStorege e o token do arquivo ControllerLogin.js
import { ExcluirLocalStorege, token } from "./ControllerFazerLogin.js";
import { USER_DELETE_ROUTE } from "../routes/route.js";
import { TokenDoCadastro } from "./ControllerCadastrar.js";
import { deletUser } from "../variavel/ControllerVar.js";
import { LimparDadosResert } from "./ControlerResertar.js";

export function excluirUsuarios() {
    if (deletUser) {
      deletUser.addEventListener("click", function(event) {
        event.preventDefault();
        excluir();
      });
    }
  }
function excluir() {
  // Configurações da requisição DELETE
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? 'Bearer ' + token : (TokenDoCadastro ? 'Bearer ' + TokenDoCadastro : null)
    },  
    body: JSON.stringify({
      accessToken: token || TokenDoCadastro
    })
  };

  // Faz a requisição para excluir o usuário
  fetch(USER_DELETE_ROUTE, requestOptions)
    .then(response => {
      // Verifica o status da resposta
      if (response.ok) {
        // Se a exclusão for bem-sucedida, retorna os dados de resposta 
        return response.json();
      } else {
        // Caso contrário, lança um erro com base no status da resposta
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
    }) 
    .then(data => {
      LimparDadosResert()
      ExcluirLocalStorege();
      exibirModalSucesso()
      Limpartokenfoto()
      
    })
    .catch(error => {
      // Captura e trata os erros durante a exclusão do usuário
      console.error('Erro ao excluir usuário:', error.message);
    });
}
function exibirModalSucesso() {
  const modalSucesso = document.getElementById('modalSucesso');
  document.getElementById('textsucess').innerHTML="Excluida com Sucesso"
  modalSucesso.style.display = "flex";
  // Definir temporizador para fechar o modal após 3 segundos
  setTimeout(() => {
    modalSucesso.style.display = "none";
    document.getElementById('textsucess').innerHTML="Enviado com Sucesso"
    window.location.href = "/"; 
  },8000);
}
