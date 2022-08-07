class Calculo {
    constructor(impuesto, resultado){
        this.impuesto = impuesto
        this.resultado = resultado
    }
}
let calculos = []
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
const formIVA = document.getElementById("formIVA")
const ivaInput = document.getElementById("ivaInput")
const divIVA = document.getElementById("divIVA")
const formICL = document.getElementById("formICL")
const iclInput = document.getElementById("iclInput")
const divICL = document.getElementById("divICL")
formIVA.addEventListener("submit", (iva1) => {
    iva1.preventDefault()
let numeroCalcular = parseFloat(ivaInput.value)
divIVA.innerHTML += `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${calculadoraIva(numeroCalcular)}</h5>
    <button class="btn btn-danger"><img src="https://img.icons8.com/pastel-glyph/20/FFFFFF/trash.png"></button>
</div>
</div>
`
let resultadoIVA = calculadoraIva(numeroCalcular)
const calculosIVA = new Calculo("IVA", resultadoIVA)
calculos.push(calculosIVA)
localStorage.setItem("calculos", JSON.stringify(calculos))
formIVA.reset() 
})
formICL.addEventListener("submit", (e1) => {
    e1.preventDefault()
let numeroCalcularicl = parseFloat(iclInput.value)
divICL.innerHTML += `
<div class="card" style="width: 18rem;" id="${calculos.indexOf}">
<div class="card-body">
    <h5 class="card-title">${calculadoraICL(numeroCalcularicl)}</h5>
    <button class="btn btn-danger"><img src="https://img.icons8.com/pastel-glyph/20/FFFFFF/trash.png"></button>
</div>
</div>
`
let resultadoICL = calculadoraICL(numeroCalcularicl)
const calculosICL = new Calculo("ICL", resultadoICL)
calculos.push(calculosICL)
localStorage.setItem("calculos", JSON.stringify(calculos))
formICL.reset() 
})