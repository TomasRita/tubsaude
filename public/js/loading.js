// public/js/loading.js
document.addEventListener('DOMContentLoaded', function () {
    const  loadingOverlay=document.getElementById('loading-overlay')
    // Função para mostrar o carregamento
    function showLoading() {
        loadingOverlay.style.display = 'flex';
        setTimeout(hideLoading, 10000);
    }

    // Função para esconder o carregamento
    function hideLoading() {
        loadingOverlay.style.display = 'none';
    }

    // Exibir o carregamento quando a página é carregada
    showLoading();

    // Exibir o carregamento quando a página está sendo recarregada
    window.addEventListener('beforeunload', showLoading);
});
