(function(){

    document.addEventListener('DOMContentLoaded', function(){

            // Declaracion de variables
    const dni = document.getElementById('dni');
    const celular = document.getElementById('celular');
    const correo = document.getElementById('correo');
    const checkbox = document.getElementById('checkbox');
    const solicitar = document.getElementById('solicitar');
            // Funciones
    solicitar.addEventListener('click', validar);

    function mostrarAlerta(mensaje, tipo){
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('alerta');

        if(tipo === 'error'){
            alerta.classList.add('error');
        }
        else{
            alerta.classList.add('correcto');
        }

        const pagina = document.querySelector('body');
        pagina.appendChild(alerta);

        setTimeout(() => {
            alerta.style.top = '-15%';
        }, 1500);

        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
    

    function validar(e){
        e.preventDefault();
        
        // Validar campos vacios
        if(dni.value === '' || celular.value === '' || correo.value === ''){
            mostrarAlerta('Rellene todos los campos','error');
            return;
        }

        // Use expresiones regulares para validar los campos
        // Validar campos numericos
        if(!/^\d{8}$/.test(dni.value)){
            mostrarAlerta('DNI no válido', 'error');
            return;
        }

        // Validar celular
        if(!/^9\d{8}$/.test(celular.value)){
            mostrarAlerta('Telefono invalido', 'error');
            return;
        }

        // Validar correo
        if(!/\S+@\S+\.\S+/.test(correo.value)){
            mostrarAlerta('Correo no válido', 'error');
            return;
        }
        if(!checkbox.checked){
            mostrarAlerta('Debe aceptar los términos y condiciones', 'error');
            return;
        }

        mostrarAlerta('Solicitud enviada correctamente', 'correcto');

        // Redireccionar a otra pagina
        let destino = "result.html";
        setTimeout(function(){
            window.location.href = destino;
        }, 1500);
    }
    });

      

})();

    
