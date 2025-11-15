// Seleciona os elementos do DOM
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Adiciona o evento de clique ao hamburger
hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no hamburger (para o 'X')
    hamburger.classList.toggle("active");
    
    // Alterna a classe 'active' no menu (para mostrar/esconder)
    navMenu.classList.toggle("active");
});

// Opcional: Fechar o menu ao clicar em um link
// Seleciona todos os links do menu
const navLinks = document.querySelectorAll(".nav-link");

// Adiciona um evento de clique para cada link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Verifica se o menu está aberto (se tem a classe 'active')
        if (navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});