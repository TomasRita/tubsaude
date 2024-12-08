@extends('layouts.app')
<link rel="stylesheet" href="{{ asset('css/marcar.css') }}">
<link rel="stylesheet" href="{{ asset('css/profile.css') }}">
@section('content')

    <section class="ConsultaSection">
          <form class="consultaForm" id="registerForm">
                <div class="text">
                    <h2>Dados da Consulta</h2>
                    <label for="">Preenche os campos</label>
                </div>
                <div class="container">
                    <div class="input-group">
                        <input type="text" id="MacarUsername" name="nome" placeholder="Nome de Usuário" required>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="input-group">
                        <select id="selectEspecialidade" required>
                            <option value="" disabled selected>Especialidade</option>
                        </select>
                    </div>                    
                    <div class="input-group">
                        <input type="date" id="birthdate" name="date" required>
                    </div>
                    <div class="button-group">
                        <button type="button" id="avancar">Avançar</button>
                    </div>     
                </div>                
            </form>

            <form class="utenteForm" id="utenteregisterForm"  style="display: none;">
                <div class="text">
                    <h2>Dados do utente</h2>
                    <label for="">Preenche os campos</label>
                </div>
                <div class="container">
                    <div class="input-group">
                        <input type="email" id="MarcarUserEmail" name="email" placeholder="Email" required>
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="input-group">
                        <input type="tel" id="MarcarUserNumber" name="numero" placeholder="+244" maxlength="9" pattern="[0-9]{9}" required>
                        <i class="fas fa-phone"></i>
                    </div>
                </div>
                <div class="button-group">
                    <button type="button" id="createbtn">Cadastrar</button>
                    <button type="button" id="voltar">Voltar</button>
                </div> 
                </div>                
            </form>

            <div class="img">
                <img src="/assets/formas/img.jfif" alt="">
            </div>
    </section>
<script type="module" src="{{ asset('js/marcar.js') }}" defer></script>
@endsection
