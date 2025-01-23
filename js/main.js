const descriptions = ["Web developer", "UX/UI designer", "Content creator"];
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