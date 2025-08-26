// index.js - Funcionalidades do Menu Principal

document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os botões do menu
    const menuButtons = document.querySelectorAll(".btn");

    menuButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // previne ação padrão do link

            const href = button.getAttribute("href");

            if(href) {
                // Abre o link em nova aba (opcional) ou na mesma
                window.location.href = href;
            }
        });

        // Efeito simples ao passar o mouse
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.2s";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

});
