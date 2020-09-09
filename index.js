var calculandoProy = require("./modulo_pago");
var costoDeMateriales = require("./modulo_materiales");
const M = costoDeMateriales.costo([500,250,325,100,]);
//horas de trabajo = h
//el pago por cada hora es = p
//el personal de proyecto es = e
//suma total de materiales = S
function proyecto(h,p,e,S) {
    console.log("calculando el pago por hora = "+ h +
                " y el pago por cada hora de trabajo = " + p);
    calculandoProy(h,p,e,S, (err,proy) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("Las horas trabajadas son "
                + h + " y el pago por hora es " + p + " el sueldo del empleado es" + proy.pago());
            console.log("La holgura del proyecto es: = " + proy.holgura());
            console.log("El precio del proyecto es: = " + proy.TotalDeTotales());
            console.log("El precio del pago a los trabajadores del proyecto es: = " + proy.total());
            console.log("El precio de los materiales son: " + M );
        }
    });

}



proyecto(8,20,1,M);
