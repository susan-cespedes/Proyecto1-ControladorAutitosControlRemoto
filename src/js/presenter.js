const comandos = document.querySelector("#comandos");
const ejecutar = document.querySelector("#ejecutar");
const resultado = document.querySelector("#resultado");


ejecutar.addEventListener("click", (event) => {
  event.preventDefault();


  const resultadocomando =comandos.value ;

  resultado.innerHTML =`
  <p><span id="subtitulos"> Posición Inicial: </span>
  <span id="respuestas"> ${resultadocomando}</span>
  
  </p>
  `;
});