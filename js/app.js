function validacionjavaScript(event){
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var contraseña1 = document.getElementById('contraseña1').value;
    var contraseña2 = document.getElementById('contraseña2').value;
    var politicaPrivacidadCheckbox = document.getElementById('politicaPrivacidad').checked;

    if (email === '' || contraseña1 === '' || contraseña2 === '') {
        //Para validar un formulario y que compruebe que no hay ningún hueco vacio //                           
            Swal.fire({ title: "Error!", text: "Por favor, complete todos los campos.",icon: "error"});
        }    
        else
            if (contraseña1 !== contraseña2) {
            //Para validar que las 2 contraseñas son iguales//
            Swal.fire({ title: "Error!", text: "Las contraseñas no coinciden.",icon: "error"});
            }
            else
                if (!politicaPrivacidadCheckbox) {
                // Función para validar que el usuario ha aceptado la política de privacidad
                Swal.fire({ title: "Error!", text: "Por favor, acepte la política de privacidad.",icon: "error"});      
            }else{
                /** Declaramos el objeto "validaciónJavaScript */
                var validacionjavaScript=
                {
                    email: email,
                    contraseña1: contraseña1,
                    contraseña2: contraseña2
                };

                /**conversión del objeto JS en un string JSON */
                var StringJSON= JSON.stringify(validacionjavaScript);
                Swal.fire({ title: "¡Registrado correctamente! ;)", text: StringJSON, icon: "success"});           
            }
        
}
