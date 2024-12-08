// Importando elementos do ControllerVar.js
import { ProfilePhoto, avatar, fileInput,img, photo, profilephoto } from "../variavel/ControllerVar.js";
import { USER_UPLOAD_PHOTO_ROUTE, USER_GET_PHOTO_ROUTE } from "../routes/route.js";
import { TokenDoCadastro } from "./ControllerCadastrar.js";
import { token } from "./ControllerFazerLogin.js";

// Função principal para controlar a foto do usuário
export function ControllerPhoto() {

    
        // Função para verificar se o token de acesso está válido
        function verificarToken() {
            const currentToken = TokenDoCadastro || token;
            return Promise.resolve(currentToken);
        }

       // Função para cadastrar a foto do usuário
       function cadastrarFotoDoUsuario(file) {
        verificarToken()
            .then((currentToken) => {
                const formData = new FormData();
                formData.append('foto', file);
                formData.append('accessToken', currentToken);
    
                fetch(USER_UPLOAD_PHOTO_ROUTE, {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Erro ao cadastrar foto do usuário. Status: ' + response.status);
                    }
                })
                .then(data => {
                    if (data && data.Mensagem === "Foto cadastrada com sucesso") {
                        localStorage.setItem('tokenobterfoto',data.Token)
                        ProfilePhoto.src = "";
                        photo.src ="";
                        carregarFotoDoUsuario()
                    } else {
                        throw new Error('Resposta inválida da API ao cadastrar foto do usuário');
                    }
                })
                .catch(error => {
                    console.error('Erro ao cadastrar foto do usuário:', error);
                });
            })
            .catch(error => {
                console.error('Erro ao verificar o token de acesso:', error);
            });
     }
    

       // Função para carregar a foto do usuário
        function carregarFotoDoUsuario() {

            const fotoobtertoken=localStorage.getItem('tokenobterfoto')

            verificarToken()
          
                .then((currentToken) => {

                    fetch(USER_GET_PHOTO_ROUTE, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + (fotoobtertoken ? fotoobtertoken : currentToken)
                        },
                        body: JSON.stringify({ accessToken: fotoobtertoken ? fotoobtertoken : currentToken})
                    })
                    .then(response => {
                        if (response.ok) {
                            return response.blob();
                        } else if (response.status === 401) {
                            console.log('Usuário não possui uma foto cadastrada.');
                        } else {
                            throw new Error('Erro ao obter foto do usuário. Status: ' + response.status);
                        }
                    })
                    .then(blob => {
                        if (blob) {

                            const imageURL = URL.createObjectURL(blob);
                            localStorage.setItem('urlfoto',imageURL)
                            const fotoobter=localStorage.getItem('urlfoto')
                            console.log(fotoobter)
                            if (photo)
                            {
                                photo.src = fotoobter;
                            }
                            if(ProfilePhoto)
                            {
                                ProfilePhoto.src = fotoobter;
                                photo.src = fotoobter;
                            }
                            
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao obter foto do usuário:', error);
                    });
                })
                .catch(error => {
                    console.error('Erro ao verificar o token de acesso:', error);
                });
        }
   
        // Função para mostrar o modal de alerta
        function mostrarModal() {
            var modal = document.getElementById("modalalert");
            modal.style.display = "block"; // Exibir o modal

            setTimeout(function() {
                modal.style.display = "none";
            }, 7000);
        }

        // Função para verificar o tamanho do arquivo
        function verificarTamanhoArquivo(file) {
            const tamanhoMaximo = 1 * 2048 * 2048; // 2MB (em bytes)
            if (file.size > tamanhoMaximo) {
                mostrarModal(); // Mostrar o modal de alerta
                return false;
            }
            return true;
        }

        // Função para lidar com interações relacionadas à foto do perfil
        function CarregadaProfilePhoto() {
            if (avatar && img && fileInput) {
                avatar.addEventListener("mouseenter", function () {
                    img.style.opacity = "1";
                    photo.style.opacity = "0.4";
                });
        
                avatar.addEventListener("mouseleave", function () {
                    img.style.opacity = "0";
                    photo.style.opacity = "1";
                });
        
                img.addEventListener("click", function () {
                    fileInput.click();
                });
        
                fileInput.addEventListener("change", function (event) {
                  
                    const file = event.target.files[0];

                    if (verificarTamanhoArquivo(file)) {
                        cadastrarFotoDoUsuario(file); 
                    }
                    fileInput.value = ''; // Limpa o valor do input do tipo file
                });

            }
        }
        
        
        if (ProfilePhoto || photo) {
            carregarFotoDoUsuario(); 
        }
       
        // Executa a função para lidar com interações relacionadas à foto do perfil
        CarregadaProfilePhoto();
}
export function Limpartokenfoto(){
    localStorage.removeItem('tokenobterfoto')
}


