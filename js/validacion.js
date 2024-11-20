(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()

            }
            form.classList.add('was-validated')
        }, false)
    })
})() 

const form = document.getElementById('form');
const name = document.getElementById('nombre');
const apellido = document.getElementById ('apellido');  
const correo = document.getElementById('email');
const contraseña = document.getElementById('password1');
const contraseña2 = document.getElementById('password2');

const errorName = document.getElementById('mensaje');
const errorApellido = document.getElementById('mensaje2');
const errorEmail = document.getElementById('mensaje3');
const errorContraseña = document.getElementById('mensaje4');
const errorContraseña2 = document.getElementById('mensaje5');

const modalCheckbox = document.getElementById('modalCheckbox');
const acepto = document.getElementById('acepto');

// Agregar un event listener para cuando el usuario intente enviar el formulario
form.addEventListener('submit', function(event) {
    form.addEventListener('change', function(event){
            // Limpiar cualquier mensaje de error anterior
        name.setCustomValidity("");
        errorName.textContent = "";
        // Verificar si el email es válido
        if (!name.checkValidity()) {
            name.setCustomValidity("Por favor, ingresa tu nombre.");
            // Personalizar el mensaje de error
            
            // Mostrar el error en el span
            errorName.textContent = name.validationMessage;
            event.preventDefault(); // Evitar que se envíe el formulario si hay un error
        }  

        contraseña2.setCustomValidity("");
        errorContraseña2.textContent = "";
        // Verificar si la contraseña es válida.
        if (!contraseña2.checkValidity()) {
            contraseña2.setCustomValidity("Debe ser igual a 'contraseña'.");
            // Personalizar el mensaje de error
            
            // Mostrar el error en el span
            errorContraseña2.textContent = contraseña2.validationMessage;
            event.preventDefault(); // Evitar que se envíe el formulario si hay un error
        }

        /* esto es para que las contraseña y repetir contraseña coincidan */
        if (contraseña.checkValidity()) {
            if (contraseña2.value !== contraseña.value) {
                contraseña2.setCustomValidity("Las contraseñas no coinciden.");
            } else {
                contraseña2.setCustomValidity("");
            }
            
            errorContraseña2.textContent = contraseña2.validationMessage;
            event.preventDefault();
        } 

        apellido.setCustomValidity("");
        errorApellido.textContent = "";
        // Verificar si el email es válido
        if (!apellido.checkValidity()) {
            apellido.setCustomValidity("Debe ingresar un apellido.");
            // Personalizar el mensaje de error
            
            // Mostrar el error en el span
            errorApellido.textContent = apellido.validationMessage;
            event.preventDefault(); // Evitar que se envíe el formulario si hay un error
        }

        correo.setCustomValidity("");
        errorEmail.textContent = "";
        if (!correo.checkValidity()) {
            // Personalizar el mensaje de error
            if (correo.validity.valueMissing) {
                correo.setCustomValidity("Por favor, ingresa tu email.");
            } else if (correo.validity.typeMismatch) {
                correo.setCustomValidity("El formato del email es incorrecto.");
            }
        
            errorEmail.textContent = correo.validationMessage;
            event.preventDefault();     
        }
        
        if (!modalCheckbox.checked) {
            modalCheckbox.classList.add('error');
            errorMessage.textContent = "Debes aceptar los términos y condiciones.";

            acepto.classList.remove('success');
            acepto.classList.add('error');

            modalButton.classList.remove('success');
            modalButton.classList.add('error');
        } else {
            modalCheckbox.classList.remove('error');
            errorMessage.textContent = "";

            acepto.classList.remove('error');
            acepto.classList.add('success');
            
            modalButton.classList.remove('error');
            modalButton.classList.add('success');
        }
    });
    if (!modalCheckbox.checked) {
        modalCheckbox.classList.add('error');
        errorMessage.textContent = "Debes aceptar los términos y condiciones.";

        acepto.classList.remove('success');
        acepto.classList.add('error');

        modalButton.classList.remove('success');
        modalButton.classList.add('error');
    } else {
        modalCheckbox.classList.remove('error');
        errorMessage.textContent = "";

        acepto.classList.remove('error');
        acepto.classList.add('success');
        
        modalButton.classList.remove('error');
        modalButton.classList.add('success');
    }
});

const modalButton = document.getElementById('modalButton');
const errorMessage = document.getElementById('errorMessage');
const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');

// Función para mostrar u ocultar el modal
function toggleModal() {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Evento para abrir el modal
modalButton.addEventListener('click', function() {
    toggleModal(); // Abrir el modal
});

// Evento para cerrar el modal
closeModal.addEventListener('click', toggleModal);


// Cerrar el modal si se hace clic fuera de él
// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target === modal) {
    toggleModal();
    }
};




/* github: julieta-fuentes, nombre: Julieta Fuentes */
/* github: stefaniecoronel, nombre: Stefanie Coronel*/
/* github: erikamaidana50, nombre: Erika Maidana */
/* github: melaniotamendi, nombre: Melani Otamendi */
/* github: GiorginaSerron, nombre: Giorgina Serron  */

/* Recordatorio : hay que corregir que los input se modifiquen en el momento y no después de cada submit
Hacer que la frase "terminos y servicios" se ponga en rojo en caso de que no se hayan aceptado*/ 