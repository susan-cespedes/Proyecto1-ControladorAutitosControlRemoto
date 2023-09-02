import validarmatriz from "./validador";

describe("Validar tamaño de la matriz < 20x20",()=>{
    it("Deberia mostrar que es menor a 20x20",()=>{
        expect(validarmatriz(18,18)).toEqual({fila:18,columna:18,mensajeinvalidacion:"",mensajevalidacion:"18 X 18"});
    });



});