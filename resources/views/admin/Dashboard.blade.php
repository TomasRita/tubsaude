@extends('admin.layouts.admin')

@section('content')
<section class="cards">
    <div class="container">
        <div class="row">
            <!-- Card Preto -->
            <div class="card">
                    <div class="body">
                    <h1 class="title">Quantidade de</h1>
                        <h2>de Usúrios</h2>
                        <p class="text">Em 3 meses</p>
                        <span>25</span>
                    </div>
            </div>

            <div class="card">
                    <div class="body">
                    <h1 class="title">Quantidade de</h1>
                        <h2>Marcações</h2>
                        <p class="text">Em 3 meses</p>
                        <span>25</span>
                    </div>
            </div>

            <div class="card">
                    <div class="body">
                    <h1 class="title">Quantidade de</h1>
                        <h2>Contas Excluidas</h2>
                        <p class="text">Em 3 meses</p>
                        <span>25</span>
                    </div>
            </div>
            <!-- Fim do Card Branco 2 -->
        </div>
    </div>
</section>
<section class="add_list">
    <div class="card especialidades-card">
        <div class="card-body">
           <button class="btn btn-primary add-especialidade-btn">
                Adicionar Especialidade <i class="fas fa-plus"></i>
            </button>
            <ul class="especialidades-list">
                <!-- Aqui serão listadas as especialidades -->
            </ul>
            <div class="text_aviso">  <!-- vai vir o aviso --></div>
        </div>
    </div>
    <div class="list-marcation">
        <div class="title">
            <h1>Marcações</h1>
        </div>
        <div class="content">  
        </div>
    </div>
</section>
@endsection
