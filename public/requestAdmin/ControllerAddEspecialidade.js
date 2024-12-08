import { token } from "../request/ControllerFazerLogin.js";
import { EDIT_SPECIALTY_ROUTE_ADMIN, GET_ALL_SPECIALTIES_ROUTE_ADMIN } from "../routes/route.js";

    // Função para cadastrar mais especialidades
    export function cadastrarEspecialidades(especialidades) {
        fetch(EDIT_SPECIALTY_ROUTE_ADMIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                accessToken: token,
                especialidade: especialidades
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Erro ao obter todas especialidades');
        })
            .then(data => {
                obterTodasEspecialidades(especialidades)
                console.log('Especialidades cadastradas com sucesso:', data);
                // Aqui você pode adicionar lógica adicional, se necessário
            })
            .catch(error => {
                console.error('Erro:', error);
                // Aqui você pode tratar o erro de acordo com sua lógica de aplicativo
            });
    }

// Função para obter todas as especialidades e atualizar o local storage
export function obterTodasEspecialidades() {
    fetch(GET_ALL_SPECIALTIES_ROUTE_ADMIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            accessToken: token,
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Erro ao obter todas especialidades');
    })
    .then(data => {
        console.log('Especialidades obtidas com sucesso:', data);
        localStorage.setItem('especialidades', JSON.stringify(data.especialidades));
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

export const especialidadesArmazenadas = JSON.parse(localStorage.getItem('especialidades')) || [];
