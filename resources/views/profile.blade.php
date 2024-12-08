@extends('layouts.app')
<link rel="stylesheet" href="{{ asset('css/profile.css') }}">
@section('content')
<section>
    <form class="profile" id="registerForm">
    @csrf
        <div class="text">
            <h2>Perfil</h2>
        </div>
        <div class="container">
            <div class="input-group">
                <button type="button" id="mydados">
                    <i class="fas fa-user"></i> Editar Meus Dados<i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="input-group">
                <button type="button" id="Definition">
                    <i  class="fas fa-cogs"></i> Definições<i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="input-group">
                <button type="button" id="listMarcar">
                    <i class="fas fa-calendar"></i> Minhas Marcações<i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="input-group">
                <button type="button">
                    <i class="fas fa-question-circle"></i> Ajuda e Suporte<i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="input-group" id="delet">
                <button type="button" id="deletUser">
                    <i class="fas fa-trash"></i> Excluir Minha Conta
                </button>
            </div>
        </div>
            <div id="sair">
                <i class="fas fa-sign-out-alt"></i>
                <button class="sairbutton" id="logoutButton" type="button">Sair</button>
            </div>
    </form>

    <form class="profile_meus_dados" id="registerFormprofile" style="display: none;">
        <div class="buttonseta">
            <a href="#" id="voltarseta"> <i class="fas fa-arrow-left"></i></a>
        </div>
        <div class="text">
            <h2>Meus Dados</h2>
        </div>
        <div class="container">
            <div class="grid-container">
                <div class="input-group">
                    <input type="text" placeholder="Nome de Usuário" required>
                    <i class="fas fa-user"></i>
                </div>
                <div class="input-group">
                    <select id="genderprofile" required>
                        <option value="" disabled selected>Selecione o Gênero</option>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="birthdate">Data de Nascimento</label>
                    <input type="date" id="birthdate" name="date" required>
                </div>
            </div>
            <div class="button-group">
                <button type="button" id="createbtnmydados">Actualizar</button>
            </div>
        </div>    
    </form>

    <form class="profile_meus_dados" id="DefinitionForm" style="display: none;">
        <div class="buttonseta">
            <a href="#" id="voltarsetaDefiniton"> <i class="fas fa-arrow-left"></i></a>
        </div>
        <div class="text">
            <h2>Definições</h2>
        </div>
        <div class="container">
            <div class="grid-container">
                <div class="input-group">
                    <input type="email" placeholder="Email" required>
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Confirmação de Senha" required>
                    <i class="fas fa-lock"></i>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Senha" required>
                    <i class="fas fa-lock"></i>
                </div>
            </div>
            <div class="button-group">
                <button type="button" id="createbtnmydadosDefinition" >Actualizar</button>
            </div>
        
        </div> 
    </form>

    <div class="lista_de_consulta" style="display: none;">
        <div class="buttonseta">
            <a href="#" id="voltar_seta_marcar"> <i class="fas fa-arrow-left"></i></a>
        </div>
        <h2>Minha Consulta</h2>
        <input type="text" placeholder="Pesquisar" id="pesquisar">
        <div class="cards">
            <!-- Aqui serão adicionados os cards -->
        </div>
    </div>  

    <div class="avatar" id="btnPhoto" >
        <img class="photo" id="profilephoto" src="./assets/formas/contacts_910px.png" alt="Avatar">
        <input type="file" id="fileInput" style="display: none;">
        <img class="img" src="./assets/icons/icons8_Plus_500px 1.png" alt="">
    </div>
</section>
@endsection

    




