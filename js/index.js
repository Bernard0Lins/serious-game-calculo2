// js/index.js

document.addEventListener("DOMContentLoaded", () => {
    const btnIniciar = document.getElementById("btn-iniciar");

    if (btnIniciar) {
        btnIniciar.addEventListener("click", () => {
            
            const btnText = btnIniciar.querySelector('.btn-text');
            const btnIcon = btnIniciar.querySelector('.btn-icon');
            
            if (btnText) btnText.innerText = "Acessando fechadura... aguarde...";
            if (btnIcon) btnIcon.innerText = "🔄"; 
            
            // Novas cores de feedback do botão (Branco e Azul Marinho)
            btnIniciar.style.backgroundColor = "#ffffff";
            btnIniciar.style.color = "#0A142F";
            
            setTimeout(() => {
                window.location.href = "pages/fase1.html"; 
            }, 1500);
        });
    }
});