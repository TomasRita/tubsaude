
const BASE_URL = 'http://localhost:3000';

// Rotas de Autenticação do Administrador
export const ADMIN_LOGIN_ROUTE = `${BASE_URL}/administrador`;
// Rotas de Consultas do Administrador
export const MARK_CONSULTATION_ROUTE_ADMIN = `${BASE_URL}/consultas/marcar`;
//Confirmar Consulta
export const CONFIRM_CONSULTATION_ROUTE_ADMIN = `${BASE_URL}/consultas/confirmar_consulta`;
////Excluir Consulta Exclusivamente apenas para Admin
export const DELETE_CONSULTATION_ROUTE_ADMIN = `${BASE_URL}/consultas/`;
//Obter Todas Consultas do Administrador
export const GET_ALL_CONSULTATIONS_ADMIN_ROUTE = `${BASE_URL}/consultas/todas_consultas`;
//Rota para cadastrar mais especialidades
export const EDIT_SPECIALTY_ROUTE_ADMIN = `${BASE_URL}/consultas/editar_especialidade`;

// userRoutes.js
// Rotas de Autenticação do Usuário
//Receber Código de Verificação
export const USER_VERIFY_EMAIL_ROUTE = `${BASE_URL}/usuarios/verificar_email`;
//Cadastrar Usuário
export const USER_REGISTER_ROUTE = `${BASE_URL}/usuarios/cadastrar`;
//Autenticar Usuário
export const USER_LOGIN_ROUTE = `${BASE_URL}/usuarios/login`;
//Editar Usuário
export const USER_EDIT_ROUTE = `${BASE_URL}/usuarios/`;
//Receber Código Novo
export const USER_RECEIVE_NEW_CODE_ROUTE = `${BASE_URL}/usuarios/receber_codigo_novo`;
//Eliminar Usuário
//Rota: DELETE /usuarios/
export const USER_DELETE_ROUTE = `${BASE_URL}/usuarios/`;
//Obter Usuário por AccessToken
export const USER_GET_BY_ACCESS_TOKEN_ROUTE = `${BASE_URL}/usuarios/obter_usuario_por_token`;
//Cadastrar Foto do Usuário
export const USER_UPLOAD_PHOTO_ROUTE = `${BASE_URL}/usuarios/cadastrar_foto`;
//Obter Foto do Usuário
export const USER_GET_PHOTO_ROUTE = `${BASE_URL}/usuarios/foto`;
//Receber Código para Resetar a Senha
export const USER_RECEIVE_RESET_CODE_ROUTE = `${BASE_URL}/usuarios/receber_codigo_de_reset`;
//Alterar Senha
export const USER_CHANGE_PASSWORD_ROUTE = `${BASE_URL}/usuarios/alterar_senha`;
//Rota para obter todas especialidades
export const GET_ALL_SPECIALTIES_ROUTE_ADMIN = `${BASE_URL}/consultas/especialidades`;

// Rotas de Consultas do Usuário
//Marcar Consulta
export const MARK_CONSULTATION_ROUTE_USER = `${BASE_URL}/consultas/marcar`;
//Confirmar Consulta Exclusivamente apenas para Admin
export const CONFIRM_CONSULTATION_ROUTE_USER = `${BASE_URL}/consultas/confirmar_consulta`;
//Excluir Consulta 
export const DELETE_CONSULTATION_ROUTE_USER = `${BASE_URL}/consultas/`;
//Obter Todas Consultas do Usuário
export const GET_ALL_CONSULTATIONS_USER_ROUTE = `${BASE_URL}/consultas/consultas_do_usuario`;


// Rotas das Conversas
// Rota para criar uma nova conversa
export const CREATE_CONVERSATION_ROUTE = `${BASE_URL}/conversas/criar`; 
// Rota para listar todas as conversas
export const LIST_ALL_CONVERSATIONS_ROUTE = `${BASE_URL}/conversas/listar`; 
// Rota para excluir uma conversa
export const DELETE_CONVERSATION_ROUTE = `${BASE_URL}/conversas/`; 
// Rotas das Mensagens
// Rota para enviar uma mensagem para um usuário
export const SEND_MESSAGE_TO_USER_ROUTE = `${BASE_URL}/mensagens/enviar`; 
 // Rota para listar usuários com quem houve troca de mensagens
export const LIST_USERS_WITH_MESSAGES_ROUTE = `${BASE_URL}/mensagens/listar`;
// Rota para editar uma mensagem
export const EDIT_MESSAGE_ROUTE = `${BASE_URL}/mensagens/`; 
// Rota para excluir uma mensagem
export const DELETE_MESSAGE_ROUTE = `${BASE_URL}/mensagens/`; 
 // Rota para enviar uma mensagem de arquivo
export const SEND_FILE_MESSAGE_ROUTE = `${BASE_URL}/mensagens/enviar_arquivo`;
// Rota para excluir um arquivo de mensagem
export const DELETE_FILE_ROUTE = `${BASE_URL}/mensagens/eliminar_arquivo/`; 
// Rota para obter um arquivo de mensagem
export const GET_FILE_ROUTE = `${BASE_URL}/mensagens/obter_arquivo/`; 

// Rotas de Contatos
// Rota para cadastrar um novo contato
export const CREATE_CONTACT_ROUTE = `${BASE_URL}/contactos/cadastrar`; 
// Rota para listar todos os contatos
export const LIST_ALL_CONTACTS_ROUTE = `${BASE_URL}/contactos/listar`; 
 // Rota para obter um contato por ID
export const GET_CONTACT_BY_ID_ROUTE = `${BASE_URL}/contactos/obterPorId`;
//Responder Contactos do usuario
export const GET_CONTACT_RESPOND_ROUTE = `${BASE_URL}/contactos/responder_usuario`;
 // Rota para excluir um contato
export const DELETE_CONTACT_ROUTE = `${BASE_URL}/contactos/eliminar/`; 


// Rotas das Notificações
// Rota para obter todas as notificações
export const GET_ALL_NOTIFICATIONS_ROUTE = `${BASE_URL}/notificacoes/`; 

 // Rota para marcar uma notificação como lida
export const MARK_NOTIFICATION_AS_READ_ROUTE = `${BASE_URL}/notificacoes/visulizar`;
