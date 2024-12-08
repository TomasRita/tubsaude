import { cadastrarEspecialidades,  especialidadesArmazenadas,  obterTodasEspecialidades } from "../requestAdmin/ControllerAddEspecialidade.js";
import { confirmarConsulta } from "../requestAdmin/ControllerConfirmarConsulta.js";
import { obterConsultasAdministrador } from "../requestAdmin/ControllerObterConsultasAdmin.js";

// Contador de especialidades
var especialidadesCount = 0;

$('.add-especialidade-btn').click(function() {
    const text = $('.text_aviso');
    var texto = "Só podes Adicionar 9 especialidades";
    if (especialidadesCount < 9) {
        $('#adicionarEspecialidadeModal').css('display', 'flex');
    } else {
        text.html('<span>' + texto + ' <i class="fas fa-exclamation-circle"></i></span>');
    }
});

// Quando o botão de cancelar no modal for clicado, oculta o modal
$('.modal .close, .modal .cancelar').click(function() {
    $(this).closest('.modal').css('display', 'none');
    $('#horaConsulta').val(horaConsulta);
});

// Função para adicionar especialidade
$('#adicionarEspecialidadeBtn').click(function() {
    var especialidade = $('#especialidadeInput').val();
    const text = $('.text_aviso');
    var texto = "Só podes Adicionar 9 especialidades";

    if (especialidade.trim() !== '') {
        // Verifica se a especialidade tem mais de 30 caracteres
        if (especialidade.length > 30) {
            alert('A especialidade não pode ter mais de 30 caracteres.');
        } else {

            var especialidadeExistente = especialidadesArmazenadas.includes(especialidade);

            if (!especialidadeExistente) {
                if (especialidadesArmazenadas.length < 9) {
                    especialidadesArmazenadas.push(especialidade);
                    localStorage.setItem('especialidades', JSON.stringify(especialidadesArmazenadas));

                    // Adiciona a especialidade à lista
                    $('.especialidades-list').append('<li> <i class="fas fa-minus-circle remove-especialidade"></i>' + especialidade + '</li>');
                    
                    // Chamada para cadastrar a especialidade na API
                    cadastrarEspecialidades(especialidade);
                    
                    // Limpa o campo de entrada do modal
                    $('#adicionarEspecialidadeModal').css('display', 'none');
                    $('#especialidadeInput').val('');
                } else {
                    // Adiciona a mensagem de aviso com o ícone de aviso
                    text.html('<span>' + texto + ' <i class="fas fa-exclamation-circle"></i></span>');
                }
            } else {
                alert("Já foi adicionada uma especialidade com esse nome!");
            }
        }
    } else {
        alert('Por favor, digite o nome da especialidade.');
    }
});


// Quando o ícone de remoção de especialidade for clicado, exibe o modal de confirmação
$(document).on('click', '.remove-especialidade', function() {
    $('#confirmarRemoverModal').css('display', 'flex');
    var especialidade = $(this).parent().text().trim();
    $('.confirmar-remover-especialidade').attr('data-especialidade', especialidade);
});

// Remover especialidade
$('.confirmar-remover-especialidade').click(function() {
    $(this).closest('.modal').css('display', 'none'); // Oculta o modal de confirmação

    var especialidade = $(this).attr('data-especialidade'); // Obtém a especialidade a ser removida
    var $especialidadeItem = $('.especialidades-list li').filter(function() {
        return $(this).text().trim() === especialidade;
    });

    if ($especialidadeItem.length > 0) {
        $especialidadeItem.remove(); // Remove a especialidade específica
        especialidadesCount--;
    }
});

/*--------------------Marcações-----------------------------------*/
// Função para gerar os cards das consultas com base nos dados retornados
export function gerarCardsConsultas(DadosConsulta) {

    if (DadosConsulta) {
        let consultas = DadosConsulta.Consultas || [];
        const content = $('.content'); // Seleciona a div de conteúdo

        // Limpa o conteúdo atual antes de adicionar os novos cards
        content.empty();
        // Verifica se o retorno é uma array, senão tenta converter
        if (!Array.isArray(consultas)) {
            // Tenta converter o objeto em uma array
            consultas = [consultas];
        }

        // Itera sobre o array de consultas
        consultas.forEach(function(consulta) {
            // Cria um novo elemento div para o card da consulta
            const cardConsulta = $('<div class="card-consulta"></div>');
            const dataConsulta = new Date(consulta.data_da_consulta);

            // Formata a data no formato desejado "dd/mm/aaaa"
            const dataFormatada = `${dataConsulta.getDate()}/${dataConsulta.getMonth() + 1}/${dataConsulta.getFullYear()}`;

            // Adiciona as informações da consulta ao card
            cardConsulta.append('<p><strong>Nome do Paciente:</strong> ' + consulta.nome + '</p>');
            cardConsulta.append('<p><strong>Especialidade:</strong> ' + consulta.especialidade + '</p>');
            cardConsulta.append('<p><strong>Data:</strong> ' + dataFormatada + '</p>');

            // Adiciona os botões "Validar", "Em Espera" e "Excluir"
            cardConsulta.append('<button class="btn-em-espera">Em Espera</button>');
            cardConsulta.append('<button class="btn-validar">Validar</button>');
            // Adiciona o card à div de conteúdo
            content.append(cardConsulta);

            cardConsulta.find('.btn-validar').click(function() {
                // Ao clicar em "Validar", abre o modal para adicionar a hora da consulta
                $('#iddhour').css('display', 'block');
                // Adicione aqui a lógica para confirmar a consulta
                const horaConsultaInput = document.getElementById('horaConsulta');
                const adicionarHoraConsultaBtn = document.getElementById("adicionarHoraConsultaBtn");
                if (adicionarHoraConsultaBtn) {
                    adicionarHoraConsultaBtn.addEventListener('click', function() {

                        const horaConsulta = horaConsultaInput.valueAsDate.toLocaleTimeString();
                        const IdConsulta = consulta.id_consulta;
                     
                        confirmarConsulta(IdConsulta, horaConsulta);

                        // Atualize o campo de hora após a confirmação da consulta
                        $('#horaConsulta').val(horaConsulta);

                        $('#iddhour').css('display', 'none');
                    })
                    
                }

            });
            const formConsulta = {
                nome:consulta.nome ,
                especialidade:consulta.especialidade ,
                data:dataFormatada ,
               }
               // Salvar os dados no localStorage
               localStorage.setItem('obterconsultas', JSON.stringify(formConsulta)|| []);
        });
        
    }
}

 // Chama a função para obter todas as especialidades atualizadas
obterTodasEspecialidades();
window.addEventListener('DOMContentLoaded',obterConsultasAdministrador);

const consultasobtidas= JSON.parse(localStorage.getItem('obterconsultas')) ;
console.log(consultasobtidas)
export { consultasobtidas};