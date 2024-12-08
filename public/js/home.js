import { registerFormModal } from "../variavel/ControllerVar.js";

const registercreatBtn = document.getElementById("registercreatBtn");
    // Abrir o modal de registro welcome
    registercreatBtn.addEventListener("click", function() {
        closeModal();
        registerFormModal.style.display = 'block';
    });
// Array de especialidades
const specialties = [
    "Clínica Geral",
    "Pediatria",
    "Ginecologia",
    "Cardiologia",
    "Ortopedia",
    "Dermatologia",
    "Psicologia",
    "Nutrição"
  ];
  
  // Seleciona a lista UL onde as especialidades serão adicionadas
  const list = document.getElementById('specialties-list');
  
  // Itera sobre o array de especialidades e cria os elementos LI e A correspondentes
  specialties.forEach(specialty => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = specialty; // Define o texto do link como a especialidade atual
    listItem.appendChild(link); // Adiciona o link ao elemento LI
    list.appendChild(listItem); // Adiciona o elemento LI à lista UL
  });
