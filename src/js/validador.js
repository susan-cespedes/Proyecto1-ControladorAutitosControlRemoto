
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

export default validarmatriz;