//variaveis da Consulta
export const ConsultaBtn=document.getElementById('createbtn');
export const createbtnmydados=document.getElementById("createbtnmydados")
export const createbtnmydadosDefinition=document.getElementById("createbtnmydadosDefinition")
export const CamposConsulta = {
    nomeUsuario: document.getElementById("MacarUsername"),
    especialidade: document.getElementById("selectEspecialidade"),
    data: document.getElementById("birthdate"),
    email: document.getElementById("MarcarUserEmail"),
    number: document.getElementById("MarcarUserNumber"),
  };
  
 //Obter Consulta
export const listMarcar=document.getElementById('listMarcar')
//variaveis da Contacto
export const sendMensager = document.getElementById('send')

//variaveis do Usuarios
export const CampoUser = {
    nomeUsuario: document.getElementById("idNomeregister"),
    genero: document.getElementById("gender"),
    email: document.getElementById("idEmailregister"),
    senha: document.getElementById("idSenharegister"),
    confirmacaoSenha: document.getElementById("idConfSenha"),
    nascimento: document.getElementById("idDataNascimento")
};

export const pedirNovoCodigoBtn= document.getElementById('pedirNovoCodigoBtn');
export const CodigoDigitado = document.querySelectorAll('.Codigo-Digitado input[type="text"]');
export const createAccountBtn = document.getElementById('createAccountBtn');
export const confirmarcodigo = document.getElementById('confirmarcodigo');
export const enterButton = document.getElementById('EnterBtn');
export const btnexcluirUsuario = document.getElementById('deletUser');


//Variaveis do Profile 

export const mydados=document.getElementById('mydados')
export const ProfilePhoto=document.getElementById("ProfilePhoto")
//export const ProfileEditPhoto=document.getElementById("profilephoto")
export const profileMeusDadosForm = document.querySelector('.profile_meus_dados');
export const avatar = document.querySelector(".avatar");
export const lista_de_consulta = document.querySelector('.lista_de_consulta');
// Obtém os botões de avançar e voltar
export const Definition = document.getElementById('Definition');
export const mydadosButton = document.getElementById('mydados');
export const listMarcarButton = document.getElementById('listMarcar');
export const voltarButton = document.getElementById('voltarseta');
export const voltar_seta_marcarButton = document.getElementById('voltar_seta_marcar');


    /*// Caminho das imagens


    // Criar elemento de imagem para a foto do perfil padrão
   export const photo = document.createElement('img');
    photo.setAttribute('class', 'photo');
    photo.setAttribute('id', 'photo');
    photo.setAttribute('src', imagePath);
    photo.setAttribute('alt', 'Avatar');

    // Criar elemento de imagem para o ícone de adição
   export const img  = document.createElement('img');
    img .setAttribute('class', 'img');
    img .setAttribute('src', plusIconPath);
    img .setAttribute('alt', 'Add Photo');*/


export const profilephoto = document.getElementById("profilephoto");
export const photo = document.querySelector(".avatar .photo");
export const img = document.querySelector(".avatar .img");
export const fileInput = document.getElementById("fileInput");
export const registerForm = document.getElementById("registerForm");
//ResetarSenha
export const idSenhaResert=document.getElementById('idSenhaResert')
export const idNomeResert=document.getElementById('idNomeResert')
export const EnterBtnResert=document.getElementById('EnterBtnResert')
export const registerModalResert=document.getElementById('registerModalResert')
export const confirmCodeModalSenha=document.getElementById('confirmCodeModalSenha')
export const CodigoDigitadoSenha=document.getElementById('CodigoDigitadoSenha')
export const codigoEnviadoSenha=document.getElementById('codigoEnviadoSenha')
export const confirmarcodigoSenha=document.getElementById('confirmarcodigoSenha')
export const pedirNovoCodigoBtnSenha=document.getElementById('pedirNovoCodigoBtnSenha')
export const emailResert=document.getElementById("emailResert")
export const NewSenha=document.getElementById("NewSenha")
export const NewSenhaConf=document.getElementById("NewSenhaConf")

//Var js Global

export const registerFormprofile=document.getElementById('registerFormprofile')
export const voltarsetaDefiniton=document.getElementById('voltarsetaDefiniton')
export const DefinitionForm = document.getElementById('DefinitionForm');
export const modals = document.querySelectorAll('.modal');
export const closeButtons = document.querySelectorAll('.close');
export const registerModal = document.getElementById('registerModal');
export const registerFormModal = document.getElementById('registerFormModal');
export const forgotPasswordModal = document.getElementById('forgotPasswordModal');
export const insertEmailModal = document.getElementById('insertEmailModal');
export const insertNewPasswordModal = document.getElementById('insertNewPasswordModal');
export const confirmCodeModal = document.getElementById('confirmCodeModal');
export const showPasswordBtn = document.getElementById('showPasswordBtn');
export const nextToInsertEmailBtn = document.getElementById('nextToInsertEmailBtn');
export const nextToConfirmCodeBtn = document.getElementById('nextToConfirmCodeBtn');
export const showRegisterFormBtn = document.getElementById('showRegisterFormBtn');
export const registerhomeButton= document.getElementById('registerhomeButton');

//Dele e Logout
export const deletUser = document.getElementById('deletUser');
export const logoutButton = document.getElementById('logoutButton');
