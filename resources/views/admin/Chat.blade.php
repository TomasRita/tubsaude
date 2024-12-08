@extends('admin.layouts.admin')
<link rel="stylesheet" href="{{ asset('admin_css/chat.css') }}">
@section('content')

<div class="chatcontainer">

    <div class="user-list">
        <input type="text" id="search-input" placeholder="Pesquisar usuário...">
        <ul id="user-list">
            <!-- Users will be added dynamically -->
        </ul>
    </div>

    <div class="chat">
        <input type="text" id="subject-input" placeholder="Assunto">
        <div id="chat-box">
            <!-- Chat messages will be displayed here -->
        </div>
         <div class="input-container">
            <input type="text" id="message-input" placeholder="Digite sua mensagem...">
            <i class="fas fa-paper-plane" id="SendAdmin"></i>
        </div>
        <div class="obter-arquivo" id="Idobterarquivo">
            <i class="fas fa-file" id="Idobter"></i>
        </div>
    </div>

</div>

@endsection
