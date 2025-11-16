// --- CÓDIGO DO MENU HAMBURGER ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no hamburger (para o 'X')
    hamburger.classList.toggle("active");
    
    // Alterna a classe 'active' no menu (para mostrar/esconder)
    navMenu.classList.toggle("active");
});

// Opcional: Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Verifica se o menu está aberto (se tem a classe 'active')
        if (navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

// --- NOVO CÓDIGO "PROFISSIONAL" PARA O HEADER ---
const header = document.querySelector(".header");

// Função que adiciona/remove a classe 'scrolled'
function handleScroll() {
    // window.scrollY > 50 significa que o utilizador rolou 50px para baixo
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Adiciona o "ouvinte" de scroll
window.addEventListener("scroll", handleScroll);