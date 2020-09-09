module.exports = (h,p,e,S,callback) => {
  modP=0;
    if (h <= 0 || p <= 0)
        setTimeout(() =>
            callback(new Error("El pago y las horas deben ser mayores que cero: h = "
                + h + ", y p = " + p),
            null),
            2000);
    else
        setTimeout(() =>
            callback(null, {
                pago:() => (h*p),
                total:()=> (modP += ((h*e)*p)),
                TotalDeTotales:()=> (S + modP),
                holgura:()=> ( ((h*e)*p)*0.08),
            }),
            2000);
}
