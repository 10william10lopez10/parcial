module.exports.costo = (CostoMateriales) => {
  SumaGlobal =0;
	for(let i of CostoMateriales) SumaGlobal +=i;
  return SumaGlobal;
}
