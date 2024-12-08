@extends('admin.layouts.admin')
@section('content')
<div class="containerpendente">
  <h1>Lista de Marcações Pendente</h1>
  <input type="text" id="searchInput" placeholder="Pesquisar paciente...">
  <table id="pacientes">
    <thead>
      <tr>
        <th>Nome do Paciente</th>
        <th>Especialidade</th>
        <th>Data e Hora da Marcação</th>
        <th>Consultas Pendentes</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      <!-- Aqui será inserido o conteúdo da tabela via JavaScript -->
    </tbody>
  </table>
</div>
@endsection
