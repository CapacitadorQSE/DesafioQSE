// script.js

// Navegação suave ao clicar nos botões do menu
document.querySelectorAll('.nav-icon').forEach(icon => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajuste para o cabeçalho fixo
        behavior: 'smooth',
      });
    }
  });
});

// Adiciona efeito ao botão CTA ao ser clicado
document.getElementById('cta-button').addEventListener('click', () => {
  alert('Inscrição no desafio iniciada!');
});
