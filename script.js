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