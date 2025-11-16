// --- CÓDIGO DO MENU HAMBURGER ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

// --- CÓDIGO DO HEADER SCROLLED ---
const header = document.querySelector(".header");

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleScroll);


// ==============================================================
// --- NOVO CÓDIGO "ULTRA MEGA PROFISSIONAL" (Animação de Scroll) ---
// ==============================================================

// 1. Cria o "observador"
// O "IntersectionObserver" é a API moderna do JS para isto
const observer = new IntersectionObserver((entries) => {
    // Passa por cada "entrada" (cada elemento que estamos a observar)
    entries.forEach((entry) => {
        // Se o elemento ESTÁ visível na tela (isIntersecting)
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } 
        // Opcional: Se quiser que a animação aconteça sempre, e não só uma vez:
        // else {
        //     entry.target.classList.remove('is-visible');
        // }
    });
}, {
    threshold: 0.1 // Dispara quando 10% do elemento estiver visível
});

// 2. Diz ao observador quais elementos ele deve observar
// Seleciona TODOS os elementos que marcámos com a classe ".animate-on-scroll"
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// 3. Manda o observador "observar" cada um deles
elementsToAnimate.forEach((el) => observer.observe(el));