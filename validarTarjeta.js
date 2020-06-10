// Click del botón para validar
function enviar() {
  var elemento_numero_tarjeta = document.getElementById("numero_tarjeta");

  var resultado = ValidarTarjetaCredito(elemento_numero_tarjeta);

  document.getElementById("resultado").innerHTML = JSON.stringify(resultado); 
}

// Función para validar el número de Tarjeta de Crédito
function ValidarTarjetaCredito(numero_tarjeta){
  var mensaje_error = "";
  var pasa_validaciones = true;

  //El número de tarjeta NO puede quedar vacío
  if(numero_tarjeta.value.trim().length==0){
    event.preventDefault();

    mensaje_error = "El Número de Tarjeta de Crédito no puede estar vacío";
    pasa_validaciones = false;
    
    numero_tarjeta.focus(); 
  }

  // Verifico que sean solo números (sin letra u otros caracteres)
  if (isNaN(numero_tarjeta.value) && pasa_validaciones==true) {
    event.preventDefault();

    mensaje_error = "El Número de tarjeta de crédito ingresado debe ser solo de números enteros.";    
    pasa_validaciones = false;

    numero_tarjeta.focus();
  }

  //El número de tarjeta NO puede ser diferente de 16 digitos
  if(numero_tarjeta.value.trim().length!=16 && pasa_validaciones==true){
    event.preventDefault();

    mensaje_error = "El Número de Tarjeta de Crédito debe tener 16 digitos";
    pasa_validaciones = false;
    
    numero_tarjeta.focus(); 
  }

  //Verifico que sean 16 digitos de números enteros
  if ( !(/^\d{16}$/.test(numero_tarjeta.value)) && pasa_validaciones==true) {
    event.preventDefault();

    mensaje_error = "El Número de tarjeta de crédito solo debe contener numeros enteros";    
    pasa_validaciones = false;

    numero_tarjeta.focus();
  }
  
  //Verifico que NO hayan ingresado el mismo número 16 veces (al menos 2 digitos representados)
  if ( !(/^(\d)(?!\1+$)\d*$/.test(numero_tarjeta.value)) && pasa_validaciones==true) {
    event.preventDefault();

    mensaje_error = "El Número de tarjeta de crédito NO puede ser el mismo número 16 veces";    
    pasa_validaciones = false;

    numero_tarjeta.focus();
  }

  //Dependiendo de si hay error o no, el objeto de respuesta cambia
  if (mensaje_error=="") {
    var respuesta = {
      valido : true,
      numero : numero_tarjeta.value,
    }
  }
  else {
    var respuesta = {
      valido : false,
      numero : numero_tarjeta.value,
      error  : mensaje_error
    }  
  }

  return respuesta;
}
