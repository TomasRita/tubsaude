import { logoutButton } from "../variavel/ControllerVar.js";
import { LimparDadosResert } from "./ControlerResertar.js";
import { ExcluirLocalStorege } from "./ControllerFazerLogin.js";
import { Limpartokenfoto } from "./ControllerPhoto.js";

export function logoutHandler() {
  if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
      event.preventDefault();
      logout();
    });
  }
}
 // Função para fazer logout
 function logout() {
    ExcluirLocalStorege()
    LimparDadosResert()
    Limpartokenfoto()
    window.location.href = "/"; // Redireciona para a página inicial após logout
}
  