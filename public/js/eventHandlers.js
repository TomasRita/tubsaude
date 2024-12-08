import { limparCamposFormulario } from "../request/ControllerCadastrar.js";
import { LimparCamposLogin } from "../request/ControllerFazerLogin.js";
import {
    modals,
    closeButtons,
    registerModal,
    registerFormModal,
    forgotPasswordModal,
    insertNewPasswordModal,
    confirmCodeModal,
    showPasswordBtn,
    showRegisterFormBtn,
    registerhomeButton,
    confirmCodeModalSenha
} from "../variavel/ControllerVar.js";

export function eventHandlers() {
    CodeModal ()
    CodeModalSenha()
    closeFocus()
    addMenuClickHandlers()
    addCloseButtonHandlers()
    addForgotPasswordHandler()
    addRegisterFormHandlers()
    addBackButtonHandlers()
    addRegisterBtnHandler() 
 }

function closeFocus(){
    window.addEventListener("click", function(event) {
        if (event.target === registerModal || event.target === registerFormModal ||
            event.target === forgotPasswordModal || event.target === insertNewPasswordModal ||
            event.target === confirmCodeModal || event.target === confirmCodeModalSenha) {
            LimparCamposLogin()
            limparCamposFormulario()
            registerModal.style.display = "none";
            registerFormModal.style.display = "none";
            forgotPasswordModal.style.display = "none";
            insertNewPasswordModal.style.display = "none";
            confirmCodeModal.style.display = "none";
        }
    });
}

 function CodeModal (){
    const inputs = document.querySelectorAll("#confirmCodeModal input[type='text']");
    inputs.forEach((input, index) => {
        input.addEventListener('input', function(event) {
            const maxLength = parseInt(this.getAttribute('maxlength'));
            const currentLength = this.value.length;
            if (currentLength >= maxLength) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    const submitBtn = document.querySelector("#confirmCodeModal button[type='submit']");
                    if (submitBtn) {
                        submitBtn.focus();
                    }
                }
            }
        });
    });
}

function CodeModalSenha (){
    const inputs = document.querySelectorAll("#confirmCodeModalSenha input[type='text']");
    inputs.forEach((input, index) => {
        input.addEventListener('input', function(event) {
            const maxLength = parseInt(this.getAttribute('maxlength'));
            const currentLength = this.value.length;
            if (currentLength >= maxLength) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    const submitBtn = document.querySelector("#confirmCodeModalSenha button[type='submit']");
                    if (submitBtn) {
                        submitBtn.focus();
                    }
                }
            }
        });
    });
}
   
   
function addMenuClickHandlers() {
    document.querySelectorAll('.nav-bar ul a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-bar ul a').forEach(link => {
                link.classList.remove('ative');
            });
            this.classList.add('ative');
        });
    });
}

export function closeModal() {
    modals.forEach(modal => {
        LimparCamposLogin()
        limparCamposFormulario()
        modal.style.display = 'none';
    });
}

function addCloseButtonHandlers() {
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
}

function addForgotPasswordHandler() {
    if (showPasswordBtn) {
        showPasswordBtn.addEventListener('click', function() {
            closeModal();
            forgotPasswordModal.style.display = "block";
        });
    }
}
/*
export function addInsertEmailHandler() {
  
}*/

function addRegisterFormHandlers() {
    if (registerhomeButton) {
        registerhomeButton.addEventListener('click', function() {
            closeModal();
            registerFormModal.style.display = 'block';
        });
    }
    if (showRegisterFormBtn) {
        showRegisterFormBtn.addEventListener('click', function() {
            closeModal();
            registerFormModal.style.display = 'block';
        });
    }
}

function addBackButtonHandlers() {
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', function() {
            closeModal();
            registerModal.style.display = 'block';
        });
    });
}

function addRegisterBtnHandler() {
    const registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            closeModal();
            registerModal.style.display = "block";
        });
    }
}
