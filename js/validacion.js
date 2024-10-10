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
  
  
   
      //function showAlertSuccess() {
         // document.getElementById("alert-success").classList.add("show");
     // }
      
     // function showAlertError() {
         // document.getElementById("alert-danger").classList.add("show");
     // }
      
      
          //document.getElementById('regBtn').addEventListener('click', function(){
              
             // const nombre = document.getElementById('nombre').value;
             // const apellido = document.getElementById('apellido').value;
              //const email = document.getElementById('email').value;
             // const password1 = document.getElementById('password1').value;
             // const password2 = document.getElementById('password2').value;
             // const password1Largo = password1.length; // password1 es un string y quiero obtener su largo para compararlo con el atributo minlength
             // const password1Minimo = document.getElementById('password1').getAttribute('minlength'); // acá coloco en una variable el atributo minlength
              //const terminos = document.getElementById('terminos').checked;
              //if (nombre && apellido && email && terminos && password1 && password2 && password1 === password2 && password1Largo >= password1Minimo) {
          
                 // showAlertSuccess();
             // }else { showAlertError();
              
                 // }
  
     
  
          
  const form = document.getElementById('form');
  const name = document.getElementById('nombre');
  const apellido = document.getElementById ('apellido');
  const correo = document.getElementById('email');
  const contraseña = document.getElementById('password1');
  const contraseña2 = document.getElementById('password2');
  const TyS = document.getElementById('terminos');
  
  const errorName = document.getElementById('mensaje');
  const errorApellido = document.getElementById('mensaje2');
  const errorEmail = document.getElementById('mensaje3');
  const errorContraseña = document.getElementById('mensaje4');
  const errorContraseña2 = document.getElementById('mensaje5');
  const errorTyS = document.getElementById('mensaje6');
  
  
   // Agregar un event listener para cuando el usuario intente enviar el formulario
   form.addEventListener('submit', function(event) {
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
  
  
      contraseña.setCustomValidity("");
      errorContraseña.textContent = "";
      // Verificar si la contraseña es válida.
      if (!contraseña.checkValidity()) {
          contraseña.setCustomValidity("Debe ingresar una contraseña con al menos 6 caracteres.");
          // Personalizar el mensaje de error
          
          // Mostrar el error en el span
          errorContraseña.textContent = contraseña.validationMessage;
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
  });
  
  
  
  const terminosCheckbox = document.getElementById('terminosCheckbox');
  const modalButton = document.getElementById('modalButton');
  const errorMessage = document.getElementById('errorMessage');
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal');
  const modalCheckbox = document.getElementById('modalCheckbox');
  
  // Función para mostrar u ocultar el modal
  function toggleModal() {
      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  // Evento para abrir el modal
  modalButton.addEventListener('click', function() {
      if (!terminosCheckbox.checked) {
          errorMessage.textContent = "Debes aceptar los términos y condiciones para continuar.";
          modalButton.classList.add('error'); // Añadir clase de error al botón
          terminosCheckbox.classList.add('error'); // Añadir clase de error al checkbox
          return;
      }
  
      errorMessage.textContent = "";
      modalButton.classList.remove('error'); // Limpiar clase de error
      terminosCheckbox.classList.remove('error'); // Limpiar clase de error
      toggleModal(); // Abrir el modal
  });
  
  // Evento para cerrar el modal
  closeModal.addEventListener('click', toggleModal);
  
  // Evento para manejar el checkbox dentro del modal
  modalCheckbox.addEventListener('change', function() {
      if (!modalCheckbox.checked) {
          modalCheckbox.classList.add('error');
          errorMessage.textContent = "Debes aceptar los términos y condiciones.";
      } else {
          modalCheckbox.classList.remove('error');
          errorMessage.textContent = "";
      }
  });
  
  // Cerrar el modal si se hace clic fuera de él
  window.onclick = function(event) {
      if (event.target === modal) {
          toggleModal();
      }
  };
  