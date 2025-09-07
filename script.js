document.addEventListener('DOMContentLoaded', function() {
    
    // Pega os elementos do Modal de Login
    const modal = document.getElementById('login-modal');
    // Corrigido para pegar todos os botões de login
    const loginTriggers = document.querySelectorAll('.login-btn');
    const closeButton = document.querySelector('.close-button');

    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }
    
    // Adiciona o listener para todos os botões de login
    loginTriggers.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Fecha o modal se o usuário clicar fora da caixa de conteúdo
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // --- NOVO CÓDIGO PARA O MENU HAMBÚRGUER ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

});