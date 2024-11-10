document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Limpia los mensajes de error previos
    clearErrors();

    let isValid = true;

    // Validar Nombre de Empresa
    const nombreEmpresa = document.getElementById("nombreEmpresa");
    if (nombreEmpresa.value.trim() === "") {
        showError("nombreEmpresaError", "El nombre de la empresa es obligatorio.");
        isValid = false;
    }

    // Validar Nombre del Reclutador
    const nombreReclutador = document.getElementById("nombreReclutador");
    if (nombreReclutador.value.trim() === "") {
        showError("nombreReclutadorError", "El nombre del reclutador es obligatorio.");
        isValid = false;
    }

    // Validar E-Mail de Contacto
    const correoContacto = document.getElementById("correoContacto");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correoContacto.value.trim())) {
        showError("correoContactoError", "Por favor, ingrese un correo electrónico válido.");
        isValid = false;
    }

    // Validar Teléfono de Contacto
    const telefonoContacto = document.getElementById("telefonoContacto");
    const phonePattern = /^[0-9]{8,15}$/;
    if (!phonePattern.test(telefonoContacto.value.trim())) {
        showError("telefonoContactoError", "El teléfono debe tener entre 8 y 15 dígitos.");
        isValid = false;
    }

    // Validar Título de Puesto
    const tituloPuesto = document.getElementById("tituloPuesto");
    if (tituloPuesto.value.trim() === "") {
        showError("tituloPuestoError", "El título de puesto es obligatorio.");
        isValid = false;
    }

    // Validar Mensaje (Descripción del Puesto)
    const descripcionPuesto = document.getElementById("descripcionPuesto");
    if (descripcionPuesto.value.trim().length < 10) {
        showError("descripcionPuestoError", "El mensaje debe tener al menos 10 caracteres.");
        isValid = false;
    }

    // Validar Monto Ofrecido
    const montoOfrecido = document.getElementById("montoOfrecido");
    if (montoOfrecido.value.trim() !== "" && isNaN(montoOfrecido.value.trim())) {
        showError("montoOfrecidoError", "El monto ofrecido debe ser un número.");
        isValid = false;
    }

    // Si todo es válido, enviar el formulario
    if (isValid) {
        alert("Formulario enviado correctamente");
        document.getElementById("contactForm").submit();
    }
});

// Función para mostrar mensajes de error
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Función para limpiar mensajes de error
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => {
        error.style.display = "none";
        error.textContent = "";
    });
}
