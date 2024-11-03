// Função para atualizar automaticamente o ano no rodapé e configurar o envio do formulário de contato
document.addEventListener("DOMContentLoaded", function () {
    // Atualizar o ano no rodapé
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // Configurar o formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio real do formulário

            // Exibe uma notificação personalizada de confirmação
            showConfirmationMessage("Thank you! Your message has been sent.");
            
            // Limpar campos do formulário após o envio
            contactForm.reset();
        });
    }

    // Configurar o botão "Learn More" na seção Our History
    const toggleHistoryBtn = document.getElementById("toggleHistoryBtn");
    const extraHistoryContent = document.getElementById("extraHistoryContent");

    if (toggleHistoryBtn && extraHistoryContent) {
        // Ocultar o conteúdo adicional inicialmente
        extraHistoryContent.style.display = 'none';

        // Alternar visibilidade do conteúdo adicional ao clicar no botão
        toggleHistoryBtn.addEventListener("click", function () {
            if (extraHistoryContent.style.display === 'none' || extraHistoryContent.style.display === '') {
                extraHistoryContent.style.display = 'block';
                toggleHistoryBtn.textContent = 'Show Less';
            } else {
                extraHistoryContent.style.display = 'none';
                toggleHistoryBtn.textContent = 'Learn More';
            }
        });
    }
});

// Função para exibir uma notificação personalizada
function showConfirmationMessage(message) {
    // Criar o elemento de notificação
    const notification = document.createElement("div");
    notification.className = "confirmation-message";
    notification.textContent = message;

    // Adicionar a notificação ao corpo da página
    document.body.appendChild(notification);

    // Remover a notificação após 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
