import {validarmatriz, validarposicion} from "./validador";

describe("Validar tamaño de la matriz < 20x20",()=>{
    it("Deberia mostrar que es menor a 20x20",()=>{
        expect(validarmatriz(18,18)).toEqual({fila:18,columna:18,mensajeinvalidacion:"",mensajevalidacion:"18 X 18"});
    });

    it("Validar la posición final del primer comando (I)",()=>{

        expect(validarposicion('5,5/1,2N/I')).toEqual('1,2O');
    });

});