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
const buttonCalc = document.getElementById("mostrarCalculos")
const divMuestraC = document.getElementById("divMuestraC")
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
    if (ivaInput.value > 0) {
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
    } else {
        Toastify({ // En caso de escribir un número que no es válido (0, menor que 0 o nada) sale una alerta
            text: "Por favor, introduzca un número válido.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(0deg, rgba(128,50,69,1) 0%, rgba(236,9,65,1) 100%)",
            },
            onClick: function(){}
        }).showToast();
    }
})
/*Calcula el ICL y lo muestra */
formICL.addEventListener("submit", (e1) => {
    e1.preventDefault()
    if (iclInput.value > 0) {
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
    } else {
        Toastify({ // En caso de escribir un número que no es válido (0, menor que 0 o nada) sale una alerta
            text: "Por favor, introduzca un número válido.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(0deg, rgba(128,50,69,1) 0%, rgba(236,9,65,1) 100%)",
            },
            onClick: function(){}
        }).showToast();
    }
})
//*Botón para mostrar todos los cálculos hechos hasta ahora*//
buttonCalc.addEventListener("click", (e2) => {
    if (calculos.length > 0) {
        const calculosStorage = JSON.parse(localStorage.getItem("calculos"))
        divMuestraC.innerHTML = ""
        calculosStorage.forEach((calcArray, indice) => {
            divMuestraC.innerHTML += `
            <div class="card" style="width: 18rem;" id="calculo${indice}">
            <div class="card-body">
                <h5 class="card-title">
                Tipo de operación:${JSON.stringify(calcArray.impuesto)}
                Resultado: ${JSON.stringify(calcArray.resultado)}
                </h5>
                <button class="btn btn-danger">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" alt="" srcset="">
                </button>
            </div>
            </div>
            `
        })
        calculosStorage.forEach((calculo, indice) =>{ //Elimina un cálculo a elección, tanto del html como del array y el localStorage
            document.getElementById(`calculo${indice}`).children[0].children[1].addEventListener("click", () => {
                document.getElementById(`calculo${indice}`).remove()
                calculos.splice(indice,1)
                localStorage.setItem("calculos", JSON.stringify(calculos))
            })
        })
    } else {
        Swal.fire( // Si no se realizó ningun cálculo al momento de clickear "Mostrar todos los cálculos", sale una alerta
            'Error',
            'No realizaste ningún cálculo.',
            'error'
        )
    }
})