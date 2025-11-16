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

// --- CÓDIGO DO HEADER SCROLLED ---
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


// ==============================================================
// --- CÓDIGO "ULTRA MEGA PROFISSIONAL" (Animação de Scroll) ---
// ==============================================================

// 1. Cria o "observador"
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } 
        // Opcional: Para a animação repetir sempre que rolar para cima/baixo
        // else {
        //     entry.target.classList.remove('is-visible');
        // }
    });
}, {
    threshold: 0.1 // Dispara quando 10% do elemento estiver visível
});

// 2. Diz ao observador quais elementos ele deve observar
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// 3. Manda o observador "observar" cada um deles
elementsToAnimate.forEach((el) => observer.observe(el));