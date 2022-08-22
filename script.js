class Calculo {
    constructor(impuesto, resultado){
        this.impuesto = impuesto
        this.resultado = resultado
    }
}
let calculos = []

const formIVA = document.getElementById("formIVA")
const ivaInput = document.getElementById("ivaInput")
const divIVA = document.getElementById("divIVA")
const formICL = document.getElementById("formICL")
const iclInput = document.getElementById("iclInput")
const divICL = document.getElementById("divICL")
const divDolar = document.getElementById("dolar")
/* Muestra (o en caso de no haber, crea) un localStorage */
if(localStorage.getItem("calculos")){
    calculos = JSON.parse(localStorage.getItem("calculos"))
    }else{
        localStorage.setItem("calculos", JSON.stringify(calculos))
    }
function calculadoraIva(numero1){
    return(numero1 * 1.21)
}
function calculadoraICL(numero2){
    return(numero2 * 1.75)
}
/*Calcula el IVA y lo muestra */
formIVA.addEventListener("submit", (iva1) => {
    iva1.preventDefault()
let numeroCalcular = parseFloat(ivaInput.value)
let resultadoIVA = calculadoraIva(numeroCalcular)
divIVA.innerHTML = ""
divIVA.innerHTML += `
<div class="card" style="width: 18rem;" id="">
<div class="card-body">
    <h5 class="card-title">${resultadoIVA}</h5>
</div>
</div>
`
const calculosIVA = new Calculo("IVA", resultadoIVA)
calculos.push(calculosIVA)
localStorage.setItem("calculos", JSON.stringify(calculos))
formIVA.reset() 
})
/*Calcula el ICL y lo muestra */
formICL.addEventListener("submit", (e1) => {
    e1.preventDefault()
let numeroCalcularicl = parseFloat(iclInput.value)
let resultadoICL = calculadoraICL(numeroCalcularicl)
divICL.innerHTML = ""
divICL.innerHTML += `
<div class="card" style="width: 18rem;" id="">
<div class="card-body">
    <h5 class="card-title">${resultadoICL}</h5>
</div>
</div>
`
const calculosICL = new Calculo("ICL", resultadoICL)
calculos.push(calculosICL)
localStorage.setItem("calculos", JSON.stringify(calculos))
formICL.reset() 
})
/* Fetch y API */
fetch("https://criptoya.com/api/dolar") //Consutlo información externa
.then(response => response.json()) //Paso los datos json a objeto
.then(({oficial, solidario, blue, mep, ccl}) => { // Una vez que tengo los objetos, los uso para crear html(en este caso, una tabla) que los muestre
    console.log(oficial, solidario, blue, mep, ccl)
    divDolar.innerHTML = `<table class="table table-striped-columns">
    <tr>
    <th>Tipo de dolar</th>
    <th>Valor</th>
    </tr>
    <tr>
        <td>Dolar Oficial</td>
        <td>${oficial}</td>
    </tr>
        <tr>
        <td>Dolar Solidario</td>
        <td>${solidario}</td>
    </tr>
    <tr>
    <td>Dolar Blue</td>
    <td>${blue}</td>
</tr>
<tr>
<td>Dolar Mep</td>
<td>${mep}</td>
</tr>
<tr>
<td>Dolar CCL</td>
<td>${ccl}</td>
</tr>
</table> `
})