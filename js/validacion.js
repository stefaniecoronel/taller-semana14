
 
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }
    
    
        document.getElementById('regBtn').addEventListener('click', function(){
            
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const password1 = document.getElementById('password1').value;
            const password2 = document.getElementById('password2').value;
            const password1Largo = password1.length; // password1 es un string y quiero obtener su largo para compararlo con el atributo minlength
            const password1Minimo = document.getElementById('password1').getAttribute('minlength'); // acá coloco en una variable el atributo minlength
            const terminos = document.getElementById('terminos').checked;
            if (nombre && apellido && email && terminos && password1 && password2 && password1 === password2 && password1Largo >= password1Minimo) {
        
                showAlertSuccess();
            }else { showAlertError();
            
                }
        });


