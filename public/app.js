// Importe as funções
import { eventHandlers } from "./js/eventHandlers.js";
import { checkAuthentication } from "./request/Auth.js";
import { Resertar } from "./request/ControlerResertar.js";
import { CadastrarUsuarios } from "./request/ControllerCadastrar.js";
import { CadastrarConsultas } from "./request/ControllerCadastrarConsulta.js";
import { Contact } from "./request/ControllerContact.js";
import { ControllerEditUser } from "./request/ControllerEditUser.js";
import { excluirUsuarios } from "./request/ControllerExcluirUser.js";
import { loginHandler } from "./request/ControllerFazerLogin.js";
import { logoutHandler } from "./request/ControllerLogout.js";
import { obterConsultas } from "./request/ControllerObterConsultaUser.js";
import { ControllerPhoto} from "./request/ControllerPhoto.js";


// Função para chamar as funções na ordem correta
function executarFuncoes() {
    CadastrarUsuarios();
    loginHandler();
    Resertar()
    checkAuthentication()
    CadastrarConsultas();
    ControllerPhoto()
    obterConsultas();
    Contact();
    excluirUsuarios();
    logoutHandler();
    eventHandlers()
    ControllerEditUser()
  
}

// Aguarda o carregamento completo do DOM e, em seguida, executa as funções
window.addEventListener('DOMContentLoaded', executarFuncoes);
