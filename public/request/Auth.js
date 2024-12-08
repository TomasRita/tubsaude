import { IsUserResertSenha, TokenResertSenha } from "./ControlerResertar.js";
import { IsUserCadastro, TokenDoCadastro } from "./ControllerCadastrar.js";
import { token, IsAdmin, IsUser } from "./ControllerFazerLogin.js";

const authUserElements = document.getElementsByClassName('auth-user');
const autregisterElements = document.getElementsByClassName('auth-register');

export function checkAuthentication() {
  const caminhoDaURL = window.location.pathname;
  const caminho = caminhoDaURL.split('/')[1];

  if (IsAdmin === "IsAdmin") {
    if (token) {
      if (caminho !== "Dashboard" && caminho !== "Chat" && caminho !== "Pendente" && caminho !== "Notification") {
        redirectToNotFound()
      }
    }
  } 
  else if (IsUser === "IsUser" || IsUserCadastro === "IsUser" || IsUserResertSenha === "IsUser") {
    if (token || TokenDoCadastro || TokenResertSenha) {
      if (caminho !== "profile" && caminho !== "MarcarConsulta"  && caminho !== "") {
        redirectToNotFound()
      }
      showAuthenticatedUserElements()
    }
    else{
      showUnauthenticatedUserElements()
    }
  } 
  else {
    if (caminho !== "" && caminho !== "MarcarConsulta") {
      redirectToNotFound()
    }
  }
}

function redirectToNotFound() {
  window.location.href = "/not found";
}

function showAuthenticatedUserElements() {
  document.getElementById('avatarButton').style.display = 'block';
  document.getElementById('loginButton').style.display = 'none';
  for (let i = 0; i < authUserElements.length; i++) {
    authUserElements[i].style.display = 'block';
  }
  for (let i = 0; i < autregisterElements.length; i++) {
    autregisterElements[i].style.display = 'none';
  }
}

function showUnauthenticatedUserElements() {
  document.getElementById('avatarButton').style.display = 'none';
  document.getElementById('loginButton').style.display = 'block';
  for (let i = 0; i < authUserElements.length; i++) {
  authUserElements[i].style.display = 'none';
  }
  for (let i = 0; i < autregisterElements.length; i++) {
    autregisterElements[i].style.display = 'block';
  }
}