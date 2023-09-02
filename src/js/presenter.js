import validarmatriz from "./validador.js"
const comandos = document.querySelector("#comandos");
const ejecutar = document.querySelector("#ejecutar");
const resultado = document.querySelector("#resultado");
const errores = document.querySelector("#errores");


ejecutar.addEventListener("click", (event) => {
  event.preventDefault();

  const resultadocomando =comandos.value.trim() ;
  const regex =  /^\d+,\d+\/\d+,\d+[NEOS]$/;
  if (regex.test(resultadocomando)){

  const partes=resultadocomando.split('/');
  const matriz=partes[0];
  const letra=partes[1];

    const dimensiones=matriz.split(',').map(Number);
    
    const fila=parseInt(dimensiones[0]);
    const columna=parseInt(dimensiones[1]);

    const validacion=validarmatriz(fila,columna);
   
    resultado.innerHTML =`
    <p><span id="subtitulos">Tamaño Matriz</span>: ${validacion.mensajevalidacion}</p>
    <p><span id="subtitulos"> Posición Inicial: </span>
    <span id="respuestas"> ${letra}</span>
    </p>
    `;
    errores.innerHTML =`<p><span id="subtitulos"></span>${validacion.mensajeinvalidacion}</p>`;
  }
  else{
    
    errores.innerHTML = `
      <p><span id="subtitulos">Error:</span> Formato de entrada incorrecto: Ejemplo 15,15/2,2[EONS].</p>
      
    `;
    resultado.innerHTML ='';
  }
  
});