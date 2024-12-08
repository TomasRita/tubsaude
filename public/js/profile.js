
import { Definition, DefinitionForm, avatar,listMarcarButton,
     lista_de_consulta,
     mydadosButton, photo,
     profileMeusDadosForm, 
     registerForm, 
     registerFormprofile, 
     voltarButton, 
     voltar_seta_marcarButton,
     voltarsetaDefiniton

 } from '../variavel/ControllerVar.js'

/*-------------------------------------------------------------------------------------- */
// Adiciona evento de clique no botão "Avançar"
if( mydadosButton){
    mydadosButton.addEventListener('click', () => {
        // Esconde o formulário de perfil
        photo.style.display = 'none';
        avatar.style.display = 'none';
        registerForm.style.display = 'none';
        // Mostra o formulário de "Meus Dados"
        profileMeusDadosForm.style.display = 'block';
    });
}
// Adiciona evento de clique no botão "Avançar"
if( Definition){
    Definition.addEventListener('click', () => {
        // Esconde o formulário de perfil
        photo.style.display = 'none';
        avatar.style.display = 'none';
        registerForm.style.display = 'none';
        // Mostra o formulário de "Meus Dados"
        DefinitionForm.style.display = 'block';

    });
}
if(listMarcarButton){
    listMarcarButton.addEventListener('click', () => {
        // Esconde o formulário de perfil
        photo.style.display = 'none';
        avatar.style.display = 'none';
        registerForm.style.display = 'none';
        // Mostra o formulário de "Meus Dados"
        lista_de_consulta.style.display = 'block';
    });
}
// Adiciona evento de clique no botão "Voltar" lista_de_consulta
if(voltar_seta_marcarButton){
    voltar_seta_marcarButton.addEventListener('click', () => {
        // Esconde o formulário de "Meus Dados"
        lista_de_consulta.style.display = 'none';
        avatar.style.display = 'block';
        registerForm.style.display = 'block';
        // Mostra o formulário de perfil
        photo.style.display = 'block';
    });
}
// Adiciona evento de clique no botão "Voltar"profileMeusDadosForm
if(voltarButton){
    voltarButton.addEventListener('click', () => {
        // Esconde o formulário de "Meus Dados"
        registerFormprofile.style.display = 'none';
        avatar.style.display = 'block';
        registerForm.style.display = 'block';
        // Mostra o formulário de perfil
        photo.style.display = 'block';
    });
}

if(voltarsetaDefiniton){
    voltarsetaDefiniton.addEventListener('click', () => {
        registerForm.style.display = 'block';
        DefinitionForm.style.display = 'none';
        avatar.style.display = 'block';
        
        photo.style.display = 'block';
    });
}

/*------------------------------------------------------------------------------------------------ */
