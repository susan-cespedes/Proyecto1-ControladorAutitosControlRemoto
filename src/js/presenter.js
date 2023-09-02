import validarmatriz from "./validador.js"
const comandos = document.querySelector("#comandos");
const ejecutar = document.querySelector("#ejecutar");
const resultado = document.querySelector("#resultado");
const errores = document.querySelector("#errores");


ejecutar.addEventListener("click", (event) => {
  event.preventDefault();

  const resultadocomando =comandos.value.trim() ;
  const regex = /^\d+,\d+$/;
  if (regex.test(resultadocomando)){

    const dimensiones=comandos.value.split(',').map(Number);
    const fila=parseInt(dimensiones[0]);
    const columna=parseInt(dimensiones[1]);

    const validacion=validarmatriz(fila,columna);
   
    resultado.innerHTML =`
    <p><span id="subtitulos">Tamaño Matriz</span>: ${validacion.mensajevalidacion}</p>
    <p><span id="subtitulos"> Posición Inicial: </span>
    <span id="respuestas"> </span>
    </p>
    `;
    errores.innerHTML =`<p><span id="subtitulos"></span>${validacion.mensajeinvalidacion}</p>`;
  }
  else{
    
    errores.innerHTML = `
      <p><span id="subtitulos">Error:</span> Formato de entrada incorrecto. Debe ser 'Número , Número ', menores a 20: Ejemplo 15,15 .</p>
      
    `;
    resultado.innerHTML ='';
  }
  
});