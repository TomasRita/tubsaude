// Em um arquivo
document.getElementById('avancar').addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('.consultaForm').style.display = 'none';
        document.querySelector('.utenteForm').style.display = 'block';
    }, 500);
});

document.getElementById('voltar').addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('.utenteForm').style.display = 'none';
        document.querySelector('.consultaForm').style.display = 'block';
    }, 500);
});
/*--------------Especialidade---------------------*/
const especialidades=[
    'Cardiologia',
    'Dermatologia',
    'Endocrinologia',
    'Gastroenterologia',
    'Ginecologia',
    'Ortopedia',
    'Oftalmologia',
    'Pediatria',
    'Psiquiatria',
    'Urologia',
    'Oncologia',
    'Neurologia',
    'Nutrição',
    'Fisioterapia',
    'Psicologia',
    'Radiologia',
    'Otorrinolaringologia',
    'Clínico Geral'
];

// Obtenha a referência para o elemento select
const selectEspecialidade=document.getElementById('selectEspecialidade');
especialidades.forEach(especialidade => {
    const option=document.createElement('option');
    option.text=especialidade;
    option.value=especialidade;
    selectEspecialidade.add(option);
});


