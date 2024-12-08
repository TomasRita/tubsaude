import * as routes from '../routes/routes';

function fetchDataFromApi() {
    fetch('{{ route("fetch-data") }}')
        .then(response => response.json())
        .then(data => {
            // Exibir os dados recebidos
            document.getElementById('api-data').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error);
        });
}

// Chama a função quando a página é carregada
window.onload = fetchDataFromApi;