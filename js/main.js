const descriptions = ["FrontEnd developer", "UX/UI focused", "Tech writer"];
const logoDescription = document.querySelector(".logo-description");
let index = 0;

function changeText() {
    logoDescription.classList.remove("show-text"); // Remove a classe para iniciar a transição
    setTimeout(() => {
        logoDescription.textContent = descriptions[index]; // Atualiza o texto
        logoDescription.classList.add("show-text"); // Adiciona a classe para mostrar o novo texto
        index = (index + 1) % descriptions.length; // Vai para o próximo texto, e reinicia ao chegar no final
    }, 500); // Atraso de 0.5s antes de trocar o texto (durante a transição)
}

setInterval(changeText, 6000);
changeText();


/* Dinamicidade do menu hambúrguer na versão mobile */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburguer-menu");
    const menu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-btn");

    /* Abertura do menu */
    menuToggle.addEventListener("click", () => {
        menu.classList.add("active");
        document.body.classList.add("no-scroll");
    });

    /* Fechamento do menu */
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
  
    /* Fechamento do menu ao clicar fora */
    menu.addEventListener("click", (e) => {
        if (e.target === menu) {
            menu.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }
    });
});