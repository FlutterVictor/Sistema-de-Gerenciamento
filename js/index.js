// index.js - Funcionalidades do Menu Principal

document.addEventListener("DOMContentLoaded", () => {

    const menuButtons = document.querySelectorAll(".btn");

    menuButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const href = button.getAttribute("href");
            if(href) window.location.href = href;
        });
    });

});
