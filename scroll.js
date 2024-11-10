// Obtén el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Muestra el botón cuando el usuario hace scroll hacia abajo
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Agrega el evento de clic para desplazarse al inicio
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // desplazamiento suave
    });
};