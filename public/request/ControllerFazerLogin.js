import { USER_LOGIN_ROUTE, ADMIN_LOGIN_ROUTE } from "../routes/route.js";
import { LimparTokenEIsUser} from "./ControllerCadastrar.js";


export function loginHandler() {
  const enterButton = document.getElementById('EnterBtn');
  if (enterButton) {
    enterButton.addEventListener("click", function(event) {
      event.preventDefault();

      const formData = {
        nome_de_usuario: $('#idNome').val(),
        senha: $('#idSenha').val()
      };
      localStorage.setItem('Dados',formData.nome_de_usuario)
      const endpoint = (formData.nome_de_usuario === "administrador") ? ADMIN_LOGIN_ROUTE : USER_LOGIN_ROUTE;
      loginUser(formData, endpoint);
    });
  }
  function loginUser(formData, endpoint) {
    const token = localStorage.getItem('token');
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Erro ao autenticar: ${response.statusText}`);
      }
    })
    .then(data => {
     // console.log(data)
      handleLoginSuccess(data);
    })
    .catch(error => {
      handleLoginError(error);
    });
  }
  
  function handleLoginSuccess(data) {
    const User=localStorage.getItem('Dados')
    const token = data.accessToken;
    localStorage.setItem('token',token);
    const redirectPath = ( User === "administrador") ? "/Dashboard" : "/";
    if ( User === "administrador") {
      localStorage.setItem('IsAdmin',"IsAdmin");
  } else {
      localStorage.setItem('IsUser', "IsUser");
  }
    window.location.href = redirectPath;

  }
  
  function handleLoginError(error) {
    document.getElementById("idSenha").style.border = "1px solid red";
    document.getElementById("idNome").style.border = "1px solid red";
    console.error('Erro ao autenticar:', error.message);
  }
  
}
export function LimparCamposLogin(){
  $('#idNome').val("")
  $('#idSenha').val("")
  document.getElementById("idSenha").style.border = "1px solid #646464";
  document.getElementById("idNome").style.border = "1px solid #646464";
}

export function ExcluirLocalStorege() {
  localStorage.removeItem("token");
  localStorage.removeItem("IsAdmin");
  localStorage.removeItem("IsUser");
  LimparTokenEIsUser()
}
// Exporta as variáveis do login
export const IsAdmin = localStorage.getItem('IsAdmin');
export const IsUser = localStorage.getItem('IsUser');
export const token = localStorage.getItem('token');