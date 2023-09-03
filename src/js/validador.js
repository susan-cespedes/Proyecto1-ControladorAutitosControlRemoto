
function validarmatriz(fila,columna){
    let mensajevalidacion="";
    let mensajeinvalidacion="";
    if(fila <= 20 && columna <= 20){
                
          mensajevalidacion=`${fila} X ${columna}`;
    }
        else{
          mensajeinvalidacion="Dimensiones de la Matriz invalidas debe ser < 20.";
        }
        return {fila,columna,mensajevalidacion,mensajeinvalidacion};
    
    
}

function validarposicion(comando) {
    const [, coordenadas, listaComandos] = comando.match(/(\d+,\d+[NSEOW])(.*)/);
  
    const [x, y, dirección] = coordenadas.match(/(\d+),(\d+)([NSEOW])/).slice(1);
  
    // Iniciar las coordenadas x, y, que sean enteros.
    const xInicial = parseInt(x);
    const yInicial = parseInt(y);
    // Iniciar las coordenadas finales
    let xFinal = xInicial;
    let yFinal = yInicial;
    let orientacion = dirección; // Almacenar la orientación en la variable orientacion
  
    for (const comando of listaComandos) {
      if (comando === 'I')
       {
        // Cambiar el giro a la derecha en lugar de la izquierda
        if (orientacion === 'N') {
          orientacion = 'O';
        } else if (orientacion === 'O') {
          orientacion = 'S';
        } else if (orientacion === 'S') {
          orientacion = 'E';
        } else if (orientacion === 'E') {
          orientacion = 'N';
        }
      }
    }
  
    const posicionFinal = `${xFinal},${yFinal}${orientacion}`;
  
    return posicionFinal;
  }

export {validarmatriz, validarposicion};